import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <span>
        <i class="fas fa-calculator"></i>
      </span>
      <p>{counter}</p>
      <Button counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
