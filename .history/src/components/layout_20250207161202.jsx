import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    
    <>
        <Navbar />
      <main className="content">
        <Outlet />
      </main>
      </>
    
  );
};

export default Layout;