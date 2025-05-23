import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "./components/home/Home";

function Layout() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
