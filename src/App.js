import React from "react";
import Header from "./Components/Header.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ShopPage from "./Pages/ShopPage.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={AuthPage} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
