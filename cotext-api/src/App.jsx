import "./App.css";
import Login from "./components/Login";
import Profiles from "./components/Profiles";
import UserContextProvider from "./context/userContextProvider";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Akshat Vedant</h1>
      <Login />
      <Profiles />
    </UserContextProvider>
  );
}

export default App;
