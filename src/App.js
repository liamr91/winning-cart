import logo from './logo.svg';
import './App.css';
import PaymentButtons from './Components/PayNowButton';
import PaymentOptions from './Components/PaymentOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PaymentOptions/>
<PaymentButtons/>

      </header>
    </div>
  );
}

export default App;
