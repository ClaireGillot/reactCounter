import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  const counterUp = () => {
    setCounter(counter + 1);
  };
  const counterDown = () => {
    setCounter(counter - 1);
  };
  const counterReset = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      <header></header>

      <Button handleClick={counterUp} sign={"+"} design={"class-one"} />
      <p>{counter}</p>
      <Button handleClick={counterDown} sign={"-"} design={"class-two"} />
      <Button handleClick={counterReset} sign={"reset"} />
    </div>
  );
}

export default App;
