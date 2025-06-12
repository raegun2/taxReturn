
import { Link } from "react-router-dom";
import mainlogo from "../assets/mainlogo.png";

function Navbar() {
  const handleNavClick = () => {
    const navMenu = document.getElementById("navmenu");
    const bsCollapse = window.bootstrap?.Collapse;

    if (navMenu && bsCollapse) {
      const collapseInstance = bsCollapse.getInstance(navMenu);
      if (collapseInstance) {
        collapseInstance.hide();
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1 fixed-top">
      <div className="container bg-dark d-block">
        <div className="row justify-content-around align-items-center">
          <div className="col-2 text-start">
            <Link to="/" className="navbar-brand" onClick={handleNavClick}>
              <img src={mainlogo} alt="Online Tax Refund Today" width="200" />
            </Link>
          </div>
          <div className="col-6 text-end">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
              aria-controls="navmenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="FeesAndCharges" className="nav-link" onClick={handleNavClick}>
                    Fees & Charges
                  </Link>
                </li>
                <li className="nav-item">
                    <Link to="TaxReturn2025" className="nav-link" onClick={handleNavClick}>
                        Tax Return
                    </Link>
                    </li>
                <li className="nav-item">
                  <Link to="AccountingAdvisory" className="nav-link" onClick={handleNavClick}>
                    Accounting & Advisory
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="ContactMe" className="nav-link" onClick={handleNavClick}>
                    Contact Us
                  </Link>
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
