import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [myBg, setMyBg] = useState("");

  return (
    <>
      <div style={{ backgroundImage: `url(${myBg})`, backgroundSize: "cover", backgroundPosition: "center", Height: "100vh" }} className="layoutContainer">
        <Navbar setMyBg={setMyBg}/>
        <div className="contentWrapper">
        <Outlet />
        </div>
        <Footer />
        
      </div>
    </>






  );
};

export default Layout;