import { Link } from "react-router-dom";
import footerLogo from "../assets/Ozbusiness2.png";
import security from "../assets/maxrefund3.png";
import maxReturn from "../assets/cybersecurity0.png";
import taxpractitioners from "../assets/tpb0.png";


export default function Footer() {
    return (
        
        <div className="bg-dark text-light">
            <div className="container align-items-center pt-1">
                <div className="row ">
                    <div className="col-lg-4 ">
                        <div className="row justify-content-evenly">
                            <div className=" col-lg-4">
                                <h5 className="text-light ps-4 lead ">Quick Link</h5>
                                <ul className="">
                                    <li className="nav-link">
                                        <Link to="TaxReturn2025" className="dropdown-item">Tax Return </Link>
                                    </li>
                                    <li className="nav-link">
                                        <Link to="FeesAndCharges" className="dropdown-item" >Fees & Charges</Link>
                                    </li>
                                    <li className="nav-link">
                                        <Link to="AccountingAdvisory" className="nav-link text-light">Accounting & Advisory</Link>
                                    </li>
                                    <li className="nav-link">
                                        <Link to="helpfulResources" className="nav-link text-light">Helpful Resources</Link>
                                    </li>
                                    <li className="nav-link">
                                        <Link to="ContactMe" className="nav-link text-light">Contact Us</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                            
                        </div>
                        
                            
                        
                                  
                    </div>
                    <div className="col-lg-4 ">
                    <div className="row">
                                <div className="col-sm text-start">  
                                <h5 className="lead text-light ps-4">Contact Info</h5>                      
                                    <ul className="">
                                        <li className="nav-link text-light">
                                            
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Main Location:</span> <br/> Suite 2B, 1420 Logan Road Mount Gravatt 4122 AU <br/> (by appointment only)
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Mobile phone:</span> <br /> +61 435 488 983
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Email:</span> <br /> info@onlinetaxrefundtoday.com.au
                                        </li>
                                    </ul>                    
                                </div>
                                
                            </div>

                    </div>
                </div>
                <div>
                <div className="row d-flex align-items-center justify-content-evenly">
                            <div className="col-2">
                                
                                <img src={taxpractitioners} alt="tax-practitioner-logo" width="90" />
                            </div >
                            <div className="col-2">
                                <img src={security} alt="security-logo" width="110" />
                            </div>
                            <div className="col-2">
                                <img src={maxReturn} alt="max-return-logo" width="130" />
                            </div>
                            <div className="col-2">
                                <img src={footerLogo} alt="Cpa-Logo" width="100" />
                            </div>
                        </div>      
                </div>
            </div>
        </div>
    
    );
}

