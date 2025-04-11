import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer"
import homeHeader from "../assets/home-header.jpeg"
import { myBg } from "./navbar"

const Layout = () => {
  return (
    <>
      <div className="body" style={{backgroundImage: `${myBg}`}}>
        <Navbar />
        <div className="contentWrapper">
        <Outlet />
        </div>
        <Footer />
        
      </div>
    </>




  );
};

export default Layout;