import logo from "./logo.svg";
import "./App.css";
import ItemList from "./Components/ItemList";

function App() {
  const productList = [
    { id: 1, name: "Monster Munch", price: 0.5, quantity: 2, paid: false },
    { id: 2, name: "Chicken Nuggets", price: 2.5, quantity: 1, paid: false },
    { id: 3, name: "Pizza", price: 3, quantity: 1, paid: false },
    { id: 4, name: "Burger", price: 2.5, quantity: 1, paid: false },
    { id: 5, name: "Hash browns", price: 1.2, quantity: 2, paid: false },
  ];

  return (
    <div className="App">
      <ItemList product={productList[0]} />
    </div>
  );
}

export default App;
