import { Link } from "react-router-dom";
import footerLogo from "../assets/footer_logo_01.png";
import security from "../assets/footer_logo_04.png";
import maxReturn from "../assets/maximum-refund-guarantee-logo.png";



export default function Footer() {
    return (
        
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 align-self-center">
                        <div className="">
                            <div className=" text-start">
                                <ul className="">
                                    <li className=" nav-link text-light lead">QUICK LINK</li>
                                    <li>
                                    <Link to="/" className="nav-link text-light">Home</Link>
                                    </li>
                                    <li className="">
                                        <Link to="Showcase1" className="nav-link text-light">Tax Return</Link>
                                    </li>
                                    <li className="">
                                        <Link to="AccountingAdvisory" className="nav-link text-light">Accounting & Advisory</Link>
                                    </li>
                                    <li className="">
                                        <Link to="#instructors" className="nav-link text-light">Helpful Resources</Link>
                                    </li>
                                    <li className="">
                                        <Link to="ContactMe" className="nav-link text-light">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                                  
                    </div>
                    <div className="col-sm-4">
                    <div className="row">
                                <div className="col-sm text-start">                        
                                    <ul className="">
                                        <li className="nav-link text-light">
                                            <span className="lead">Contact Info</span>
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Main Location:</span> <br /> 134 Hill Rd Runcorn QLD {/* spell-checker: disable-line */}
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Mobile phone:</span> <br /> 0435 488 983
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Email:</span> <br /> excellentaccountant@outlook.com
                                        </li>
                                    </ul>                    
                                </div>
                                
                            </div>

                    </div>
                </div>
            </div>
        </div>
    
    );
}

