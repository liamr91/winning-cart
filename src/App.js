import logo from './logo.svg';
import './App.css';
import PaymentForm from "./Components/PaymentForm"
import 'bootstrap/dist/css/bootstrap.min.css';

const productList = [
  { id: 1, name: 'Monster Munch', price: 0.50, quantity: 2, paid: false }, 
  { id: 2, name: 'Chicken Nuggets', price: 2.50, quantity: 1, paid: false }, 
  { id: 3, name: 'Pizza', price: 3, quantity: 1, paid: false },
  { id: 4, name: 'Burger', price: 2.50, quantity: 1, paid: false },
  { id: 5, name: 'Hash browns', price: 1.20, quantity: 2, paid: false }
]


function App() {
  return (
    <div>
      <PaymentForm total="22.44" split="0" />
    </div>
  );
}

export default App;
