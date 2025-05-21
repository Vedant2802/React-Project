import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [chAllowed, setChAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(
    function () {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) str += "0123456789";
      if (chAllowed) str += "!@#$%^&*()~`";

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    },

    [length, numberAllowed, chAllowed, setPassword]
  );
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(
    function () {
      passwordGenerator();
    },
    [length, numberAllowed, chAllowed, passwordGenerator]
  );
  return (
    <>
      {/* <h1 className="text-4xl text-center text-white">Password generator</h1> */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4">
        {/* {password} */}
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 rounded-3xl cursor-pointer"
          onClick={copyPasswordToClipboard}
        >
          copy
        </button>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={function (e) {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={function (e) {
                  console.log(e);
                  setNumberAllowed(function (prev) {
                    return !prev;
                  });
                }}
              />
              <br />
              <label htmlFor="">Number</label>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={chAllowed}
                  id="numberInput"
                  onChange={function (e) {
                    console.log(e);
                    setChAllowed(function (prev) {
                      return !prev;
                    });
                  }}
                />
              </div>
              <br />
              <label htmlFor="">Char Allowed</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
