import { useRef } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { storeInputValue } from "./store/firstSlice";

function App() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const handleChange = () => {
    const currentElement = inputRef.current;
    // currentElement.style.backgroundColor = "Red";
    console.log("Current value:", inputRef.current.value);
    dispatch(storeInputValue(inputRef.current.value));
  };

  return (
    <>
      <h2>This is RTK understanding</h2>
      <input type="text" ref={inputRef} onChange={handleChange} />
    </>
  );
}

export default App;
