import "./App.css";
import conf from "./conf/conf";

function App() {
  // This will work only if you created you application using Create React App
  // console.log(process.env.REACT_APPWRITE_URL);
  // To access the vite env variable you write like this
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(conf.appWriteUrl);
  return <h1>A Blog in Appwrite</h1>;
}

export default App;
