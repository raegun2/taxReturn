import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [myBg, setMyBg] = useState("");

  return (
    <>
      <div className="body" style={{ margin: 0;
                              
                                    display: "block",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100vh",
                                    flexDirection: "column",
                                    backgroundImage: myBg ? `url(${myBg})` : "none",
                                    backgroundSize: "cover", 
                                    backgroundPosition: "center" }}>
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