import "./App.css";
import {  Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

import React from "react";

export const HatsPage = () => {
  return <div>hats ppage</div>;
};

function App() {
  return (
    <div className="App"> 
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
