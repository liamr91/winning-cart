import logo from './logo.svg';
import './App.css';

const productList = [
  { id: 1, name: 'Monster Munch', price: 0.50, quantity: 2, paid: false }, 
  { id: 2, name: 'Chicken Nuggets', price: 2.50, quantity: 1, paid: false }, 
  { id: 3, name: 'Pizza', price: 3, quantity: 1, paid: false },
  { id: 4, name: 'Burger', price: 2.50, quantity: 1, paid: false },
  { id: 5, name: 'Hash browns', price: 1.20, quantity: 2, paid: false }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
