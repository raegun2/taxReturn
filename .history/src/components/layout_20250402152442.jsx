import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <div className="body" style={{backgroundImage: url('./src/assets/home-header.jpeg')}}>
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