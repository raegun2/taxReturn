import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./layout.css";


const backgroundImages = {
  "/": "/src/assets/bgI/home-header2.jpg",
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
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "starter center",
        Height: "90vh",
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
