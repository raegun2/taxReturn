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
  };

  return (
    <>
      
      
        <div className="container rounded bg-dark text-light p-4 ">
          <div id="head-box">
            <h1 className="heading-input">
              Estimate Your <span className="text-warning">2025 Tax Refund</span>
            </h1>
          </div>
          <div className="container bg-dark text-light">
            <form method="post" onSubmit={handleSubmit}>
              <div className="row justify-content-center">
              <label className="col-form-label">Total Income or Gross Payment:</label>
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
                <div className="col-sm-10 pt-3">
                  <button className="btn btn-primary" type="submit">
                    Calculate tax return
                  </button>
                </div>
              </div>
            </form>
          </div>
            {result && 
              <div className="row justify-content-center">
                <div className="col-lg-4"><h3 className="mt-3">{result}</h3></div>
                <div className="col-lg-4"> 
                  <h3>Get Your Tax Refund Now!</h3>
                  <Link to="TaxReturn2025"><button className="btn btn-primary">Start Your Tax Return</button></Link>
                </div>
              </div>
            }
          
        </div>
      
    </>
  );
};

export default TaxCalculator;
