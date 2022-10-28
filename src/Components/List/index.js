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
    paid: false,
    selected: false,
  },
];

export default function List({splitPayment}) {
  const [products, setProducts] = useState(productList);

  return (
    <table className="table">
      {products.map((product) => {
          return <ItemList product={product} showCheckbox={splitPayment} />;
      })}
    </table>
  );
}
