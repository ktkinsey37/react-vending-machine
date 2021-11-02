import React from "react"
import Chips from "./Chips"
import Soda from "./Soda"
import Cookies from "./Cookies"
import { BrowserRouter, Route, Link } from "react-router-dom"
import VendingMachine from './VendingMachine';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/soda" exact>
          <Soda />
        </Route>
        <Route path="/chips" exact>
          <Chips />
        </Route>
        <Route path="/cookies" exact>
          <Cookies />
        </Route>
    </BrowserRouter>
  );
}

export default App;
