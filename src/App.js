import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <Button counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
