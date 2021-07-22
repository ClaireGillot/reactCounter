import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";
import {library} from '@fortawesome/fontawesome-svg-core';
import { faCalculator} from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
library.add(faCalculator, faSeedling);


function App() {
  const [counter, setCounter] = useState(0);

  const counterUp = () => {
    counter < 10 && (
    setCounter(counter + 1));
  };
  const counterDown = () => {
    counter > 0 && (
    setCounter(counter - 1));
  };
  const counterReset = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      < Header />
        <div className="container">
        <Button handleClick={counterDown} sign={"-"} design={"buttonDown"} />
        <div className="counter">{counter}</div>
        <Button handleClick={counterUp} sign={"+"} design={"buttonUp"} />
        <div className="reset">
        <Button
          handleClick={counterReset}
          sign={"Reset"}
          design={"buttonReset"}
        />
        </div>
     </div>
      <Footer/>
        
    </div>
  );
}

export default App;
