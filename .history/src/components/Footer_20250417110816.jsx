import { Link } from "react-router-dom";
import footerLogo from "../assets/footer_logo_01.png";
import security from "../assets/footer_logo_04.png";
import maxReturn from "../assets/maximum-refund-guarantee-logo.png";
import taxpractitioners from "../assets/tax-practitioners-board-logo.png";


export default function Footer() {
    return (
        
        <div className="bg-dark">
            <div className="container align-items-center pt-1">
                <div className="row ">
                    <div className="col-lg-8 ">
                        <div className="row justify-content-evenly">
                            <div className=" col-lg-4 text-start">
                                <h5 className="text-light ps-4 lead ">Quick Link</h5>
                                <ul className="">
                                    <li className="nav-link"><Link to="TaxReturn2025" className="dropdown-item">Tax Return 2025</Link></li>
                                    <li className="nav-link"><Link to="TaxReturn2024" className="dropdown-item">Tax Return 2024</Link></li>
                                    <li className="nav-link"><Link to="TaxReturn2023" className="dropdown-item">Tax Return 2023</Link></li>
                                    <li className="nav-link"><Link to="FeesAndCharges" className="dropdown-item" >Fees & Charges</Link></li>
                            
                                    
                                </ul>
                            </div>
                            <div className=" col-lg-4 text-start pt-4">
                                <ul className="">
                                    
                                    
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
                                            <span className="">Main Location:</span> <br /> Suite 2B, 1420 Logan Road Mount Gravatt 4122 AU{/* spell-checker: disable-line */}
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Mobile phone:</span> <br /> (07) 3217 0317
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Email:</span> <br /> info@milestoneaccounting.com.au
                                        </li>
                                    </ul>                    
                                </div>
                                
                            </div>

                    </div>
                </div>
                <div>
                <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-2">
                                <img src={footerLogo} alt="Cpa-Logo" width="100" />
                            </div >
                            <div className="col-2">
                                <img src={security} alt="security-logo" width="100" />
                            </div>
                            <div className="col-2">
                                <img src={maxReturn} alt="max-return-logo" width="80" />
                            </div>
                            <div className="col-2">
                                <img src={taxpractitioners} alt="tax-practitioner-logo" width="80" />
                            </div>
                        </div>      
                </div>
            </div>
        </div>
    
    );
}

