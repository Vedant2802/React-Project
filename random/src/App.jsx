import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const newData = [
    { index: 0, data: ["Akshat Vedant", "Hellow"] },
    { index: 1, data: ["Akshat", "Hellow"] },
    { index: 2, data: ["Hellow"] },
  ];

  const clickHandler = (e) => {
    const index = e.target.selectedIndex;
    setData(newData[index]?.data || []);
  };

  return (
    <>
      <select name="pageSelect" className="select" onChange={clickHandler}>
        <option value="0">One</option>
        <option value="1">Two</option>
        <option value="2">Three</option>
      </select>

      <div className="data">
        {data.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </>
  );
}

export default App;
