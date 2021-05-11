import React from "react";
import Header from "./Components/Header.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ShopPage from "./Pages/ShopPage.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import CheckoutPage from "./Pages/CheckoutPage.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth, createUserProfile } from "./Firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: "",
    };
  }
  //Function which will make/cancel subscription to Firebase onAuthStateChanged method
  unsubscribeFromAuth = null;

  //On Component mount
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        const userRef = await createUserProfile(user);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: user });
      }
    });
  }

  //On Component unmount, we want to end the subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" exact component={AuthPage} />
          <Route path="/checkout" exact component={CheckoutPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
