import "./App.css";
import { useState } from 'react'
import List from "./Components/List";

function App() {
  const [splitPayment, setSplitPayment] = useState(false)

  const handleClickSplitPayment = () => {
    setSplitPayment(!splitPayment)
  }
  return (
    <div className="App">
      <List splitPayment={splitPayment} />
      <button onClick={handleClickSplitPayment}>hello</button>
    </div>
  );
}

export default App;
