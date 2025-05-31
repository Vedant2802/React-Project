import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import conf from "./conf/conf";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";

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
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  });
  return !loading ? (
    <div className="min-h-screen flex flex-wrap bg-amber-200">
      <div className="w-full block">
        <Header />

        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
