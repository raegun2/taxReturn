import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer";


const Layout = () => {
  const [myBg, setMyBg] = useState("");

  return (
    <>
      <div className="body" style={{backgroundImage: `${myBg}`}}>
        <Navbar setMyBg={setMyBg}/>
        <div className="contentWrapper">
        <Outlet />
        </div>
        <Footer />
        
      </div>
    </>




  );
};

export default Layout;