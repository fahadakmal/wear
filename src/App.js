import "./App.css";
import {  Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.compnent";
import React from "react";


function App() {
  return (
    <div className="App"> 
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
