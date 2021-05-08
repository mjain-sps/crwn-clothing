import React from "react";
import HomePage from "./Pages/HomePage.jsx";
import ShopPage from "./Pages/ShopPage.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
