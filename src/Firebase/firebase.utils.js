import Firebase from "firebase/app";
import auth from "firebase/auth";
import firestore from "firebase/firestore";

const config = {
  apiKey: "AIzaSyADG9UCbvPxRjc26AB51-IhJtQbxJjpwWg",
  authDomain: "crn-clothing-c1c81.firebaseapp.com",
  projectId: "crn-clothing-c1c81",
  storageBucket: "crn-clothing-c1c81.appspot.com",
  messagingSenderId: "662037750633",
  appId: "1:662037750633:web:e4ecc81a7d0dfc8ae553f8",
};

Firebase.initializeApp(config);

export const { auth, firestore };

export default Firebase;
