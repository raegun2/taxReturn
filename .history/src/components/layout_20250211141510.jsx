import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <>
      
      <Navbar />
      
      <div className="content pt-3">
      <Outlet />
      </div>
    </>
  );
};

export default Layout;