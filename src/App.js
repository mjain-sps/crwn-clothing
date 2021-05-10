import React from "react";
import Header from "./Components/Header.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ShopPage from "./Pages/ShopPage.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUSer: "",
    };
  }
  render() {
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}

export default App;
