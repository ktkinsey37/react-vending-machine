import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import VendingMachine from "./VendingMachine";

function Drink() {
  return (
    <div>
      <img
        src="https://cdn1.cheryls.com/wcsstore/CherylAndCompany/images/catalog/cco_FAL21_226541x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}"
        alt="Cookies"
      />
      <Link to="/">go back</Link>
    </div>
  );
}

export default Drink;
