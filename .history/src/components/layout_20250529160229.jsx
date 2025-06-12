import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import "./layout.css";
import homeHeader5 from "../assets/bgI/home-header5.png";
import accountingAndAdvisory2 from "../assets/bgI/accountingAndAdvisory2.png";
import ScrollToTop from '../components/ScrollToTop';



const backgroundImages = {
  "/": homeHeader5,
  "/AccountingAdvisory": accountingAndAdvisory2,
  "/ContactMe": "null",
  "/TaxReturn2025": homeHeader5,
  "/TaxReturn2024": homeHeader5,
  "/TaxReturn2023": homeHeader5,
  "/FeesAndCharges": "null",
  "/HelpfulResources": "null",

};

const RootLayout = () => {
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
        Height: "100vh",
        width:  "100vw",
        
      }}
    >
      <ScrollToTop />
      <Navbar />
      <div className="contentWrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
