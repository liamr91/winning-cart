import "./App.css";
import { useState } from 'react'
import List from "./Components/List";

const list = [
  {
    id: 1,
    name: "Monster Munch",
    price: 0.5,
    paid: false,
    selected: false,
    img: "",
  },
  {
    id: 2,
    name: "Chicken Nuggets",
    price: 2.5,
    paid: false,
    selected: false,
  },
  { id: 3, name: "Pizza", price: 3, quantity: 1, paid: false, selected: false },
  {
    id: 4,
    name: "Burger",
    price: 2.5,
    paid: false,
    selected: false,
  },
  {
    id: 5,
    name: "Hash browns",
    price: 1.2,
    paid: true,
    selected: false,
  },
];

function App() {
  const [splitPayment, setSplitPayment] = useState(false)
  const [productList, setProductList] = useState(list)

  const calculation = (total, num) => {
    return total + num;
  }

  const calculateTotal = () => {
    const totals = productList.map(product => product.price)
    return totals.reduce(calculation)
  }

  const calculateSplitTotal = () => {
    const splitTotals = productList.map( product => {
      if(product.selected) return product.price
    })

    return splitTotals.reduce(calculation)
  }

  const handleClickSplitPayment = () => {
    setSplitPayment(!splitPayment)
  }
  return (
    <div className="App">
      <List products={list} splitPayment={splitPayment} />
    </div>
  );
}

export default App;
