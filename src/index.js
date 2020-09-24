import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { StoreProvider } from "./store";
import Home from "./components/home/home-component.jsx";
import Detail from "./components/detail/detail-component.jsx";
import Wishlist from "./components/wishlist/wishlist-component.jsx";

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <header>
          <div className="container">
            <h1>Movie Recommendations</h1>
          </div>
        </header>
        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/detail" component={Detail} />
            <Route path="/wishlist" component={Wishlist} />
          </Switch>
        </div>
      </StoreProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
