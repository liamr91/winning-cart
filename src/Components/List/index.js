import { Checkbox } from "@mui/material";
import { React, useState } from "react";
import ItemList from "../ItemList";
import "./styles.css"

export default function List({splitPayment, products}) {

  return (
    <div id="table-container">
        <table className="table">
        {products.map((product) => { 
            if(!product.paid) {
                return <ItemList paid={product.paid} product={product} showCheckbox={splitPayment} />;
            }
        })}
        </table>

        <h3 id="paid-for">Paid For</h3>

        <table className="table">
        {products.map((product) => { 
            if(product.paid) {
                return <ItemList paid={product.paid} product={product} showCheckbox={false} />;
            }
        })}
        </table>
    </div>
  );
}
