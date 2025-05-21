import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  // const totalButton = () => {
  //   let buttonNumber = 10;
  //   let totalButtons = [];
  //   for (let i = 0; i <= buttonNumber; i++) {
  //     totalButtons.push(
  //       <button
  //         id={i}
  //         className="outline-none px-4 py-1 rounded-full bg-amber-500"
  //       >
  //         {i + 1}
  //       </button>
  //     );
  //   }

  //   return totalButtons;
  // };

  //  better Reacty way
  const handleButtonClick = (e) => {
    console.log(e);
    const id = e.target.id;
    const buttonElement = document.getElementById(id);

    // if (buttonElement) {
    //   buttonElement.style.backgroundColor = "red";
    // }

    setColor("red");
    buttonElement.style.backgroundColor = { color };
  };
  const TotalButton = ({ count }) => {
    return (
      <div>
        {Array.from({ length: count }, (_, i) => {
          return (
            <button
              key={i}
              id={`button_${i}`}
              className={`outline-none px-4 py-1 bg-${color}-500 rounded-ful mx-1 cursor-pointer`}
              onClick={handleButtonClick}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    );
  };
  return (
    <div
      className="w-full h-screen duration-200"
      // style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
        <div className="flex flex-wrap justify-center gap-1 shadow-lg">
          {/* <button className="outline-none px-4 py-1 rounded-full bg-amber-50">
            Red
          </button> */}
          {/* {totalButton()} */}
          <TotalButton count={10} />
        </div>
      </div>
    </div>
  );
}

export default App;
