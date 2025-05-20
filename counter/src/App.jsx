// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    // counter += 1;
    setCounter(counter + 1);
  };

  const decreaseValue = () => {
    // counter -= 1;
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log("My name is Akshat");
  }, [counter]);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
