import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';



const TaxCalculator = () => {
    // Handle the click event for the question icons
  const [visibleComment, setVisibleComment] = useState(null);

  const handleVisibleComment = (index) => {
    setVisibleComment(index);
  };
  const handleMouseLeave = () => {
    setVisibleComment(null);
  };
  
  const sectionRef = useRef(null);

  const [totalIncome, setTotalIncome] = useState("");
  const [taxWithheld, setTaxWithheld] = useState("");
  const [amountTotalTaxableIncome, setAmountTotalTaxableIncome] = useState("0");
  const [deductions, setDeductions] = useState("");
  const [result, setResult] = useState("");
  const [amountAfterOffSet, setAmountAfterOffSet] = useState("0");
  const [amountLowIncomeTaxOffSet, setAmountLowIncomeTaxOffSet] = useState("0");
  const [amountMedicareLevy, setAmountMedicareLevy] = useState("0");
  const [marginalTaxRate, setMarginalTaxRate ] = useState("0");
  const [amountTotalPayable, setAmountTotalPayable ] = useState("0");
 
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
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    
 

    let taxPayable = 0;
    let taxRefund = 0;
    let lowIncomeTaxOffSet = 0;
    let medicareLevy = 0;
    

    const income = parseFloat(totalIncome) || 0;
    const withheld = parseFloat(taxWithheld) || 0;
    const deduction = parseFloat(deductions) || 0;




    if (income < 1 || withheld < 0 || deduction < 0) {
      setResult("All values must be valid and positive!");
      return;
    }

    const totalTaxableIncome = income - deduction;
    
    //Resident tax rate applied
    if (totalTaxableIncome < 18201) {
      taxPayable = 0;
      setMarginalTaxRate(0);
    } else if (totalTaxableIncome < 45000) {
      taxPayable = (totalTaxableIncome - 18200) * 0.16;
      setMarginalTaxRate(16);
    } else if (totalTaxableIncome < 120001) {
      taxPayable = (totalTaxableIncome - 45000) * 0.30 + 5092;
      setMarginalTaxRate(30);
    } else if (totalTaxableIncome < 180001) {
      taxPayable = (totalTaxableIncome - 120000) * 0.37 + 29467;
      setMarginalTaxRate(37);
    } else {
      taxPayable = (totalTaxableIncome - 180000) * 0.45 + 51667;
      setMarginalTaxRate(45);
    }

    //LITO rate
    if (totalTaxableIncome <= 37500 ) {
      lowIncomeTaxOffSet = 700;
    } else if (totalTaxableIncome <= 45000) {
      lowIncomeTaxOffSet = 700 - ((totalTaxableIncome - 37500) * 0.05);
    } else if (totalTaxableIncome <= 66667) {
      lowIncomeTaxOffSet = 325 - ((totalTaxableIncome - 45000) * 0.015);
    }

    //applied Deductions and Offsets
    let offsetApplied = Math.min(taxPayable, lowIncomeTaxOffSet);
    let afterOffSet = taxPayable - offsetApplied;

    //Medicare levy
    if (totalTaxableIncome <= 26000 ) { 
      medicareLevy = 0;
    } else if (totalTaxableIncome <= 32500) {
      medicareLevy = (totalTaxableIncome - 26000) * 0.1; 
    } else if (totalTaxableIncome >= 32501) {
      medicareLevy = totalTaxableIncome * 0.02;
    }

    //Total payable on income
    const totalPayable = medicareLevy + afterOffSet;

    setAmountTotalTaxableIncome(totalTaxableIncome);
    setAmountMedicareLevy(medicareLevy.toFixed(2));
    setAmountLowIncomeTaxOffSet(offsetApplied.toFixed(2));
    setAmountTotalPayable(totalPayable.toFixed(2));
    setAmountAfterOffSet(afterOffSet.toFixed(2));

    

    taxRefund = Math.floor(withheld - (afterOffSet + medicareLevy));

    if (taxRefund < 0) {
      setResult(`You owe $${Math.abs(taxRefund.toFixed(2))} to Australian Tax office.
      Contact your tax agent now!`);
    } else if (taxRefund >= 0) {
      setResult(`Your estimated refund is $${taxRefund.toFixed(2)}.`);
    }

    
    setDeductions("");
    setTotalIncome("");
    setTaxWithheld("");
  };
  
  return (
    
      
      <section className="taxCalculator pb-2">
        <div className="container rounded bg-info text-light p-4 ">
          <div id="head-box">
            <h1 className="heading-input">
              Estimate Your <span className="text-warning">2025 Tax Refund</span>
            </h1>
          </div>
          <div className="container bg-light text-light rounded p-1">
            <div className="row justify-content-evenly align-items-center">
                <div className="col-lg-5 col-11 text-center" >
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="row justify-content-center text-dark text-center">
                      <div className="col-form-label position-relative">
                        Total Income or Gross Payment: 
                        <span className="tooltip-icon-wrapper">
                          <i
                            className="bi bi-question-circle"
                            onMouseEnter={() => handleVisibleComment(1)}
                            onMouseLeave={handleMouseLeave}
                          ></i>
                          {visibleComment === 1 && (
                            <div className="modern-tooltip">
                              Input the Total Income from your PAYG summary.
                              If you have more than one PAYG, add up all 
                              incomes from your PAYG summaries.
                            </div>
                          )}
                        </span>
                      </div>

                      <div className="input-group mb-3 w-100 ">
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
                      <div className="col-form-label position-relative">
                        Total Tax Withhelds: 
                        <span className="tooltip-icon-wrapper">
                          <i
                            className="bi bi-question-circle"
                            onMouseEnter={() => handleVisibleComment(2)}
                            onMouseLeave={handleMouseLeave}
                          ></i>
                          {visibleComment === 2 && (
                            <div className="modern-tooltip">
                              Input the tax withheld from your PAYG summary,
                              or if you have more than one PAYG summary,
                              add up all the tax withhelds and input the total amount.
                            </div>
                          )}
                        </span>
                      </div>
                      
                      <div className="input-group mb-3 w-100">
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

                      <div className="col-form-label position-relative">
                        Total Applicable Deductions: 
                        <span className="tooltip-icon-wrapper">
                          <i
                            className="bi bi-question-circle"
                            onMouseEnter={() => handleVisibleComment(3)}
                            onMouseLeave={handleMouseLeave}
                          ></i>
                          {visibleComment === 3 && (
                            <div className="modern-tooltip">
                              Input the total expenses that you spent
                              for tax deductables, for example, work or education
                              Add up all the expenses and input the total amount.
                            </div>
                          )}
                        </span>
                      </div>
                      
                      <div className="input-group mb-3 w-100">
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
                      <div className="col-sm-10 py-3 text-center">
                        <button className="btn btn-primary" type="submit">
                          Calculate Tax Return
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                  <div className="col-lg-6 col-10 bg-white text-start" ref={sectionRef}>
                      <div className="row align-items-center justify-content-center text-dark">
                        <div className="col-lg-11 pt-2">
                          <h3>Summary</h3>                          
                          <div className="col-lg-12 pt-3 d-flex ">
                            <label className="d-inline-block flex-grow-1 lead"><p>Total taxable income:</p></label>
                            <span className="lead"><p>{`$${amountTotalTaxableIncome}`}</p></span>
                          </div>
                          <div className="col-lg-12 d-flex border-bottom ">
                            <label className="d-inline-block flex-grow-1"><p>Applied Low income tax offset:</p></label>
                            <span><p>{`$${amountLowIncomeTaxOffSet}`}</p></span>
                          </div>
                          <div className="col-lg-12 d-flex pt-2 ">
                            <label className="d-inline-block flex-grow-1"><p>Your tax payable:</p></label>
                            <span><p>{`$${amountAfterOffSet}`}</p></span>
                          </div>
                          <div className="col-lg-12 d-flex border-bottom">
                            <label className="d-inline-block flex-grow-1"><p>Medicare Levy payable(Single):</p></label>
                            <span><p>{`$${amountMedicareLevy}`}</p></span>
                          </div>
                          <div className="col-lg-12 d-flex pt-2">
                            <label className="d-inline-block flex-grow-1"><p>Total payable for tax and Medicare Levy:</p></label>
                            <span><p>{`$${amountTotalPayable}`}</p></span>
                          </div> 
                          <div className="col-lg-12 d-flex">
                            <label className="d-inline-block flex-grow-1"><p>Your marginal tax rate:</p></label>
                            <span><p>{`${marginalTaxRate}%`}</p></span>
                          </div>
                          { result && <div className="col-lg-12 pt-3 text-center"><h3 className="mt-3">{`${result}`}</h3></div>
                          }
                      </div>
                    </div>
                  </div>
                </div>
                {result &&        
                <div className="col-lg-12 pt-4 text-primary "> 
                    <h3>Get Your Tax Refund Today!</h3>
                    <Link to="TaxReturn2025"><button className="btn btn-primary">Refund Now</button></Link>
                  </div>
                }
          </div>
            
            
          </div>
      </section>
    
  );
};

export default TaxCalculator;
