
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import homeHeader from "../assets/home-header.jpeg";
import homeHeader2 from "../assets/bookkeeping-services-header.jpeg";

const navLinks = [
    {
      id: 0,
      title: "HOME",
      bgI: ` ${homeHeader}`,
      path: "/"
    },
    {
      id: 1,
      title: "Accounting & Advisory",
      bgI: `${homeHeader2}`,
      path: "AccountingAdvisory"
    },
    {
      id: 2,
      title: "Helpful Resources",
      bgI: ``,
      path: "HelpfulResources"

    },
    {
      id: 3,
      title: "CONTACT US",
      bgI: ``,
      path: "ContactMe"
    }
  ];


function Navbar(setMyBg) {

    

    const handleClick = (bgI) => {
            setMyBg(bgI);
            console.log(bgI);
        };
    
     




  return (
   

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1 fixed-top ">
            <div className="container bg-dark">
                <Link to="/" className="navbar-brand" onClick={() => handleNavClick(navLinks[0].bgI)}>Milestone Accountant</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tax Return
                                    </span>
                                    <ul className="dropdown-menu dropdown-menu-dark" id="taxReturnList">
                                        <li><Link to="OnSpotTaxReturn" className="dropdown-item">Tax Return 2025</Link></li>
                                        <li><Link to="FeesAndCharges" className="dropdown-item" >Fees & Charges</Link></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {navLinks.slice(1).map(({title,path,bgI,id}) =>(
                            <li className="nav-item" key={id}>
                                <Link to={path} onClick={() => handleClick(bgI)} ><span className="nav-item">{title}</span></Link>
                               
                            </li>
                        ))}
                        {/* <li className="nav-item">
                            <Link to="AccountingAdvisory" className="nav-link" onclick={(e)=> handleclick }>Accounting & Advisory</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="HelpfulResources" className="nav-link">Helpful Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="ContactMe" className="nav-link">Contact Us</Link>
                        </li>*/}
                    </ul>
                </div>
            </div>
        </nav>
   
  );
}
export default Navbar;