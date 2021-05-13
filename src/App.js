import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Components/Header.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ShopPage from "./Pages/ShopPage.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import CheckoutPage from "./Pages/CheckoutPage.jsx";
import CollectionPage from "./Pages/CollectionPage.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  auth,
  createUserProfile,
  postCollectionToFirebase,
} from "./Firebase/firebase.utils";
import { collectionDataLoading } from "./Actions/Collection.Action";
function App() {
  const [currentUser, setCurrentUser] = useState("");

  //Get Collection data from State
  const dispatch = useDispatch();
  const getCollectionFromState = useSelector((state) => state.collection);
  const { collection } = getCollectionFromState;
  //On Component mount
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        const userRef = await createUserProfile(user);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });

    //Dispatching Action to Fetch Collection using Redux SAGA
    dispatch(collectionDataLoading());

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  //useEffect to triiger a Function which will post Collection data to Firebase firestore
  useEffect(() => {
    if (collection) {
      postCollectionToFirebase(
        "collection",
        collection.map(({ title, items }) => ({ title, items }))
      );
    }
  }, [collection]);

  //
  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/shop/:category" component={CollectionPage} />
        <Route path="/signin" exact component={AuthPage} />
        <Route path="/checkout" exact component={CheckoutPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
