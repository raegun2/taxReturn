import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer"
import homeHeader from "../assets/home-header.jpeg"

const Layout = () => {
  return (
    <>
      <div className="body" style={{backgroundImage: `${homeHeader}`, backgroundSize: "cover", backgroundPosition: "center"}}>
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