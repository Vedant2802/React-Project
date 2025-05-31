import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import conf from "./conf/conf";
import { login } from "./store/authSlice";

function App() {
  // This will work only if you created you application using Create React App
  // console.log(process.env.REACT_APPWRITE_URL);
  // To access the vite env variable you write like this
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // console.log(conf.appWriteUrl);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        dispatch(login({ userData }));
      })
      .finally();
  });
  return <h1>A Blog in Appwrite</h1>;
}

export default App;
