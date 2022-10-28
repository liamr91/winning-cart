import logo from './logo.svg';
import './App.css';
import PaymentForm from "./Components/PaymentForm"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <PaymentForm total="22.44" split="0" />
    </div>
  );
}

export default App;
