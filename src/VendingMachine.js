import React from "react"
import { Link } from "react-router-dom"


function VendingMachine(){
    return (<div className="VendingMachine">
    <img
    src="https://cdn.shopify.com/s/files/1/0506/3177/products/INF4SFrontgraybezelwithCC_448x448.jpg?v=1621450765
    "
    alt="Vending machine"
  />
  <br/>
      <Link to="/chips">Chips</Link>
      <Link to="/soda">Soda</Link>
      <Link to="/cookies">Cookies</Link>
  </div>)
}


export default VendingMachine;
