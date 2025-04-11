import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [myBg, setMyBg] = useState("");

  return (
    <>
      <div className="body" style={{ backgroundImage: myBg ? `url(${myBg})` : "none"}}>
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