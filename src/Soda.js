import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import VendingMachine from "./VendingMachine";

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <img
        src="https://assets.katomcdn.com/q_auto,f_auto/products/055/055-2705485/055-2705485.jpg"
        alt="Soda"
      />
      <Link to="/">go back</Link>
    </div>
  );
}

export default Chips;
