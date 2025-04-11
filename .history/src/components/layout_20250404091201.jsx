import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./layout.css";


const backgroundImages = {
  "/": "./src/assets/home-header.jpeg",
  "/AccountingAdvisory": "https://images.unsplash.com/photo-1612839231989-7e1d4c6a3b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxjb25zdWx0aW5nfGVufDB8fHx8MTY5MjkyNjU3Mw&ixlib=rb-4.0.3&q=80&w=1080",
  "/ContactMe": "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJhbmslMjBpbWFnZXxlbnwwfHx8fDE2OTI5MjY1NzM&ixlib=rb-4.0.3&q=80&w=1080",
  "/OnSpotTaxReturn": "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJhbmslMjBpbWFnZXxlbnwwfHx8fDE2OTI5MjY1NzM&ixlib=rb-4.0.3&q=80&w=1080",
  "/FeesAndCharges": "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJhbmslMjBpbWFnZXxlbnwwfHx8fDE2OTI5MjY1NzM&ixlib=rb-4.0.3&q=80&w=1080",
};

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [bgImage, setBgImage] = useState(backgroundImages[currentPath] || backgroundImages["/"]);

  // Update background image when route changes
  useEffect(() => {
    setBgImage(backgroundImages[currentPath] || backgroundImages["/"]);
  }, [currentPath]);

  return (
    <div
      className="layout-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "starter center",
        Height: "100vh",
        transition: "background-image 0.5s ease-in-out",
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
