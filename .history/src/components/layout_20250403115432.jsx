import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [myBg, setMyBg] = useState("");

  return (
    <>
      <div style={{ backgroundImage: `url(${myBg})`, backgroundSize: "cover", backgroundPosition: "center" height: "100vh" }}>
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