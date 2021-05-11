import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyADG9UCbvPxRjc26AB51-IhJtQbxJjpwWg",
  authDomain: "crn-clothing-c1c81.firebaseapp.com",
  projectId: "crn-clothing-c1c81",
  storageBucket: "crn-clothing-c1c81.appspot.com",
  messagingSenderId: "662037750633",
  appId: "1:662037750633:web:e4ecc81a7d0dfc8ae553f8",
};

Firebase.initializeApp(config);

export const auth = Firebase.auth();
export const firestore = Firebase.firestore();

//Provider to enable google popin signup
const provider = new Firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt:'select_account'})
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  login_hint: "user@example.com",
});

//Function which will pop-up Google Sign-in
export const signInWithGoogle = () => {
  Firebase.auth().signInWithPopup(provider);
};

export const createUserProfile = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const userSnapShot = await userRef.get();
  if (!userSnapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`error ${error.message}`);
    }
  }
  return userRef;
};
export default Firebase;
