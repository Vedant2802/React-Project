import { useEffect, useRef, useState } from "react";
import "./App.css";
import Focus from "./Focus";
import Family from "./Family";

function App() {
  const [text, setText] = useState("");
  const counter = useRef(0);
  useEffect(() => {
    counter.current += 1;
  });

  return (
    <>
      <div className="card">
        <button onClick={clickHandler}>count is {count}</button>
      </div>
      <input onChange={(e) => setText(e.target.value)} />
      <br />
      {counter.current}
      <Focus />
    </>
  );
}

export default App;
