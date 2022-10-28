import { Checkbox } from "@mui/material";
import { React, useState } from "react";
import ItemList from "../ItemList";
import "./styles.css"

const productList = [
  {
    id: 1,
    name: "Monster Munch",
    price: 0.5,
    quantity: 2,
    paid: false,
    selected: false,
    img: "",
  },
  {
    id: 2,
    name: "Chicken Nuggets",
    price: 2.5,
    quantity: 1,
    paid: false,
    selected: false,
  },
  { id: 3, name: "Pizza", price: 3, quantity: 1, paid: false, selected: false },
  {
    id: 4,
    name: "Burger",
    price: 2.5,
    quantity: 1,
    paid: false,
    selected: false,
  },
  {
    id: 5,
    name: "Hash browns",
    price: 1.2,
    quantity: 2,
    paid: true,
    selected: false,
  },
];

export default function List({splitPayment}) {
  const [products, setProducts] = useState(productList);

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
