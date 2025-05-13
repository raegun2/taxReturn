import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';



const TaxCalculator = () => {
  const [showComment1, setShowComment1] = useState({display: "none"});
  const [showComment2, setShowComment2] = useState({display: "none"});
  const [showComment3, setShowComment3] = useState({display: "none"}); 
  const [showComment4, setShowComment4] = useState({display: "none"});

  const [totalIncome, setTotalIncome] = useState("");
  const [taxWithheld, setTaxWithheld] = useState("");
  const [deductions, setDeductions] = useState("");
  const [result, setResult] = useState("");


  // Handle the click event for the question icon
  const handleClick = () => {
    setShowComment1((changeStyle) => ({
      ...changeStyle, display: changeStyle.display === "none" ? "flex" : "none"}));
  };
  const handleClick2 = () => {
    setShowComment2((changeStyle) => ({
      ...changeStyle, display: changeStyle.display === "none" ? "flex" : "none"}));
  };
  const handleClick3 = () => {
    setShowComment3((changeStyle) => ({
      ...changeStyle, display: changeStyle.display === "none" ? "flex" : "none"}));
  };  
  const onMouseLeave1 = () => {setShowComment1({display: "none"});};
  const onMouseEnter1 = () => {setShowComment1({display: "flex"});};

  const onMouseLeave2 = () => {setShowComment2({display: "none"});};
  const onMouseEnter2 = () => {setShowComment2({display: "flex"});};

  const onMouseLeave3 = () => {setShowComment3({display: "none"});};
  const onMouseEnter3 = () => {setShowComment3({display: "flex"});};
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
                <label className="col-form-label">Total Income or Gross Payment: <i onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1} className="bi bi-question-circle"></i></label>
                <div className="comment1" style={showComment1}><p> add up all the incomes and input <br /> the total income that you earned from the year end</p></div>
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
                <label className="col-form-label">Total Tax Withheld: <i onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2} className="bi bi-question-circle"></i></label>
                <div className="comment2" style={showComment2}><p> input the tax withheld from your PAYG summary,<br/>or if you have more than one PAYG summary,<br/>add up all the tax withhelds and input the total amount</p></div>
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
                <label className="col-form-label">Total Applicable Deductions: <i onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3} className="bi bi-question-circle"></i></label>
                <div className="comment3" style={showComment3}><p> add up all the work related expense<br />input the total amount for the year end</p></div><div className="input-group mb-3 w-75">
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
