import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Google",
      link: "google.com",
    },
    {
      name: "Google",
      link: "google.com",
    },
    {
      name: "Google",
      link: "google.com",
    },
    {
      name: "Google",
      link: "google.com",
    },
    {
      name: "Google",
      link: "google.com",
    },
    {
      name: "Google",
      link: "google.com",
    },
  ];

  return (
    <div>
      <header className="w-full  bg-gray-200">
        <nav className="flex justify-between align-middle">
          {/* <Link to="google.com">Google</Link> */}
          {/* <a href="google.com">Google</a>
          <a href="youtube.com"> Youtube</a>
          <a href="github.com">Github</a>
          <a href=""></a> */}
          {/* <ul className="flex justify-between gap-4 ">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.name}
                <button onClick={() => navigate(item.link)}></button>
              </li>
            ))}
          </ul> */}
          {/* {navItems.map((item, index) => {
            return (
              <Link to={item.link} key={index} className=" flex justify-center">
                {item.name}
              </Link>
            );
          })} */}
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`https://${item.link}`}
              className="flex justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>
      {/* <button
        className="flex justify-center mt-24 ml-[50%] border-2 rounded-xl bg-gray-300 cursor-pointer"
        bgColor="bg-red-600"
        textColor="text-white"
        onClick={() => alert("Boom!")}
        type="submit"
        aria-label="Important Action"
        data-testid="launch-button"
      >
        Exit everything
      </button> */}
      <Button
        // bgColor="bg-red-600"
        // textColor="text-white"
        // className="text-xl font-bold rounded-lg"
        onClick={() => alert("Boom!")}
        // type="submit"
        aria-label="Important Action"
        data-testid="launch-button"
        textStyle=""
        imageStyle=""
        onChange={() => {}}
      />
    </div>
  );
}

export default App;
