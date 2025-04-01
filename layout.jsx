import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer"
import {myBg} from "./navbar"

const Layout = () => {
  return (
    <>
      <div className="body" style={{backgroundImage:`url(${myBg})`}}>
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