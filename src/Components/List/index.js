import { Checkbox } from "@mui/material";
import { React, useState } from "react";
import ItemList from "../ItemList";
import "./styles.css"

export default function List({splitPayment, products}) {

  return (
    <>
        <table className="table">
        {products.map((product) => { 
            if(!product.paid) {
                return <ItemList paid={product.paid} product={product} showCheckbox={splitPayment} />;
            }
        })}
        </table>

        <div id="paid-for">Paid For</div>

        <table className="table">
        {products.map((product) => { 
            if(product.paid) {
                return <ItemList paid={product.paid} product={product} showCheckbox={false} />;
            }
        })}
        </table>
    </>
  );
}
