import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import VendingMachine from "./VendingMachine";

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <img
        src="https://i5.walmartimages.com/asr/9a7db15b-615c-4789-b91e-171fdc9b2fdb_1.a05211ad251680bcf647dfc8579e5f36.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        alt="Potato chips"
      />
      <Link to="/">go back</Link>
    </div>
  );
}

export default Chips;
