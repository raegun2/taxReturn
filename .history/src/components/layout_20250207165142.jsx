import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
      <Outlet />
      </div>
    </>
  );
};

export default Layout;