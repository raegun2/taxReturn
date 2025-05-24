
import { Link } from "react-router-dom";



function Navbar() {
    
  return (
   

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1 fixed-top ">
            <div className="container bg-dark d-block">
                <div className="row justify-content-around align-items-center">
                    <div className="col-4 text-start">
                        <Link to="/" className="navbar-brand">OnlineTaxRefundToday</Link>
                    </div>
                    <div className=" text-end flex-direction-row col-8">
                        <button className="btn btn-outline-light">
                            <phone to="tel:1300 000 000" className="text-decoration-none text-light">1300 000 000</phone>
                        </button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navmenu">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Tax Return
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-dark" id="taxReturnList">
                                                <li><Link to="TaxReturn2025" className="dropdown-item">Tax Return 2025</Link></li>
                                                <li><Link to="TaxReturn2024" className="dropdown-item">Tax Return 2024</Link></li>
                                                <li><Link to="TaxReturn2023" className="dropdown-item">Tax Return 2023</Link></li>
                                                <li><Link to="FeesAndCharges" className="dropdown-item" >Fees & Charges</Link></li>
                                                
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                
                                <li className="nav-item">
                                    <Link to="AccountingAdvisory" className="nav-link">Accounting & Advisory</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="ContactMe" className="nav-link">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>    
                </div>
            </div>
        </nav>
   
  );
}
export default Navbar;