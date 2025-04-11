import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./layout.css";


const backgroundImages = {
  "/": "/src/assets/bgI/home-header3.jpg",
  "/AccountingAdvisory": "/src/assets/bookkeeping-services-header.jpeg",
  "/ContactMe": "null",
  "/TaxReturn2025": "/src/assets/home-header.jpeg",
  "/FeesAndCharges": "null",
  "/HelpfulResources": "null",

};

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [bgImage, setBgImage] = useState(backgroundImages[currentPath]);

  // Update background image when route changes
  useEffect(() => {
    setBgImage(backgroundImages[currentPath]);
  }, [currentPath]);

  return (
    <div
      className="layout-container"
      style={{
        filter: blur(5px);
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "starter center",
        Height: "100vh",
        width:  "100vw",
        
      }}
    >
      <Navbar />
      <div className="contentWrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
