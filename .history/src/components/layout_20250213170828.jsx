import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <div className="body">
        
        <Navbar />
        <div className="contentWrapper">
          <Outlet />
        </div>
        <div className="footer">
          <Footer />
      </div>
      </div>
      
      
    </>
  );
};

export default Layout;