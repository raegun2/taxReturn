import React, { useState  } from "react";
import { Link } from "react-router-dom";

const TaxCalculator = () => {
  const [totalIncome, setTotalIncome] = useState("");
  const [taxWithheld, setTaxWithheld] = useState("");
  const [deductions, setDeductions] = useState("");
  const [result, setResult] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "totalIncome") setTotalIncome(value);
    if (name === "taxWithheld") setTaxWithheld(value);
    if (name === "deductions") setDeductions(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let taxPayable = 0;
    let taxRefund = 0;

    const income = parseFloat(totalIncome) || 0;
    const withheld = parseFloat(taxWithheld) || 0;
    const deduction = Number.isInteger(deductions) || 0;




    if (income < 1 || withheld < 0 || deduction < 0) {
      setResult("All values must be valid and positive!");
      return;
    }

    const totalTaxableIncome = income - deduction;

    if (totalTaxableIncome < 18201) {
      taxPayable = 0;
    } else if (totalTaxableIncome < 45000) {
      taxPayable = (totalTaxableIncome - 18200) * 0.19;
    } else if (totalTaxableIncome < 120001) {
      taxPayable = (totalTaxableIncome - 45000) * 0.325 + 5092;
    } else if (totalTaxableIncome < 180001) {
      taxPayable = (totalTaxableIncome - 120000) * 0.37 + 29467;
    } else {
      taxPayable = (totalTaxableIncome - 180000) * 0.45 + 51667;
    }

    taxRefund = Math.floor(withheld - taxPayable);

    if (taxRefund < 0) {
      setResult(`You owe $${Math.abs(taxRefund)} to Australian Tax office.
      contact your tax agent now!`);
    } else if (taxRefund > 0) {
      setResult(`You will receive a tax refund of $${taxRefund}.`);
    } else {
      setResult("Your tax payable for this year is $0.");
    }
    setDeductions("");
    setTotalIncome("");
    setTaxWithheld("");
  };

  return (
    <>
      
      
        <div className="container rounded bg-info text-light p-4 ">
          <div id="head-box">
            <h1 className="heading-input">
              Estimate Your <span className="text-warning">2025 Tax Refund</span>
            </h1>
          </div>
          <div className="container bg-light text-light rounded p-1">
            <form method="post" onSubmit={handleSubmit}>
              <div className="row justify-content-center text-dark text-center">
              <label className="col-form-label">Total Income or Gross Payment:	<div className="question_icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
</svg></div></label>
                <div className="input-group mb-3 w-75">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    name="totalIncome"
                    type="number"
                    autoComplete="off"
                    className="form-control"
                    required
                    value={totalIncome}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
                <label className="col-form-label">Total tax withheld:</label>
                <div className="input-group mb-3 w-75">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    name="taxWithheld"
                    type="number"
                    autoComplete="off"
                    className="form-control"
                    required
                    value={taxWithheld}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
                <label className="col-form-label">Total Applicable Deductions:</label>
                <div className="input-group mb-3 w-75">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    name="deductions"
                    type="number"
                    autoComplete="off"
                    className="form-control"
                    required
                    value={deductions}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
                <div className="col-sm-10 pt-3 text-center">
                  <button className="btn btn-primary" type="submit">
                    Calculate tax return
                  </button>
                </div>
              </div>
            </form>
          </div>
            {result && 
              <div className="row justify-content-evenly align-items-center">
                <div className="col-lg-4 pt-3"><h3 className="mt-3">{result}</h3></div>
                <div className="col-lg-4 pt-4"> 
                  <h3>Get Your Tax Refund Today!</h3>
                  <Link to="TaxReturn2025"><button className="btn btn-primary">Start Now</button></Link>
                </div>
              </div>
            }
          
        </div>
      
    </>
  );
};

export default TaxCalculator;
