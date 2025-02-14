

function Skills() {
    return (
            <>
                <section className="container mt-3 border">
                    <div className="row">
                        <div style={{backgroundColor: "yellow"}} className="col-lg-8">
                        <h1>Introduction of <span className="text-warning"> IT personnel</span></h1>
                            <p className="lead my-4">I have taken CS50x course online from Harvard University.
                                lots of fun to learn IT skills and a taste of various programs, 
                                such as C#, HTML, CSS, Javascript, Python, bootstrap.
                                If there is a further study that I needed, 
                                it will be Javascript frameworks, REACT, Node.js, etc.
                            </p>
                            <button className="btn btn-primary btn-lg " data-bs-toggle="modal" data-bs-target="#contact-form">Contact me</button> 
                        </div>
                        <div className="col-lg-4">
                        <form action="/register" method="post">
                                <div  class=" w-sm-100 form-group row justify-content-center ">                             
                                    
                                    <div class="col-sm-25 w-75 text-center flex-grow-0">
                                        <h2>Free Refund</h2>
                                        <h2>Estimate</h2>
                                        <input placeholder="First Name" name="first-name" type="text" autocomplete="off" autofocus class="form-control"/>
                                    </div>
                                    
                                    <div className="col-sm-10 w-75">
                                        <input placeholder="Last Name" name="last-name" type="text" autocomplete="off" className="form-control"/>
                                    </div>

                                    
                                    <div className="col-sm-10 w-75">
                                        <input placeholder="Email" name="email" type="email" autocomplete="off" className="form-control"/>
                                    </div>
                                    
                                    <div className="col-sm-10 w-75">
                                        <input placeholder="Date of Birth(DD/MM/YYYY)" name="dob" type="date" autocomplete="off" className="form-control"/>
                                    </div>
                                    
                                    <div className="col-sm-10 w-75">
                                        <input placeholder="Tax File No." name="tfn" type="number" autocomplete="off" className="form-control"/>
                                    </div>
                                    
                                    <div className="col-sm-10 w-75">
                                        <input placeholder="Phone" name="phone" type="tel" autocomplete="off" className="form-control"/>
                                    </div>
                                    
                                    <div className="col-sm-10 w-75">
                                        <input placeholder="Referral Code (Optional)" name="referralCode" type="digit" className="form-control"/>
                                    </div>

                                    <div className="col-sm-10 w-75 align-items-between">
                                        <div className="">
                                            <input type="checkbox" name="consent" className="" defaultChecked={true} required></input>    
                                            <p1 className="padding-10"> I provide consent and authorize My Tax Refund Today (ABN 0000000000 and Tax Agent 000000000) to add me as a client in the Tax Agent Portal.</p1>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 w-50 text-center">
                                        <button className="btn btn-primary w-75" type="submit">Submit</button>
                                    </div>    
                                </div>             
                            </form>
                        </div>
                    </div>
                    <div className="container">
                    <form onSubmit={calculateTax}>
                        <div className="form-group">
                            <label htmlFor="totalIncome">Gross payment or total income:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="totalIncome"
                                name="totalIncome"
                                value={totalIncome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="taxWithheld">Total tax withheld:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="taxWithheld"
                                name="taxWithheld"
                                value={taxWithheld}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="deductions">Total deductions:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="deductions"
                                name="deductions"
                                value={deductions}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Calculate tax return
                        </button>
                    </form>
                    </div>
                </section> 
                            
                </>
        );      

}
import React, { useState } from 'react';

function Skills() {
    const [totalIncome, setTotalIncome] = useState('');
    const [taxWithheld, setTaxWithheld] = useState('');
    const [deductions, setDeductions] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'totalIncome') setTotalIncome(value);
        if (name === 'taxWithheld') setTaxWithheld(value);
        if (name === 'deductions') setDeductions(value);
    };

    const calculateTax = (e) => {
        e.preventDefault();
        // Add your tax calculation logic here
    };

    return (
        <>
            <section className="container mt-3 border">
                <div className="row">
                    <div style={{ backgroundColor: "yellow" }} className="col-lg-8">
                        <h1>Introduction of <span className="text-warning"> IT personnel</span></h1>
                        <p className="lead my-4">I have taken CS50x course online from Harvard University.
                            lots of fun to learn IT skills and a taste of various programs,
                            such as C#, HTML, CSS, Javascript, Python, bootstrap.
                            If there is a further study that I needed,
                            it will be Javascript frameworks, REACT, Node.js, etc.
                        </p>
                        <button className="btn btn-primary btn-lg " data-bs-toggle="modal" data-bs-target="#contact-form">Contact me</button>
                    </div>
                    <div className="col-lg-4">
                        <form action="/register" method="post">
                            <div className=" w-sm-100 form-group row justify-content-center ">

                                <div className="col-sm-25 w-75 text-center flex-grow-0">
                                    <h2>Free Refund</h2>
                                    <h2>Estimate</h2>
                                    <input placeholder="First Name" name="first-name" type="text" autocomplete="off" autofocus className="form-control" />
                                </div>

                                <div className="col-sm-10 w-75">
                                    <input placeholder="Last Name" name="last-name" type="text" autocomplete="off" className="form-control" />
                                </div>


                                <div className="col-sm-10 w-75">
                                    <input placeholder="Email" name="email" type="email" autocomplete="off" className="form-control" />
                                </div>

                                <div className="col-sm-10 w-75">
                                    <input placeholder="Date of Birth(DD/MM/YYYY)" name="dob" type="date" autocomplete="off" className="form-control" />
                                </div>

                                <div className="col-sm-10 w-75">
                                    <input placeholder="Tax File No." name="tfn" type="number" autocomplete="off" className="form-control" />
                                </div>

                                <div className="col-sm-10 w-75">
                                    <input placeholder="Phone" name="phone" type="tel" autocomplete="off" className="form-control" />
                                </div>

                                <div className="col-sm-10 w-75">
                                    <input placeholder="Referral Code (Optional)" name="referralCode" type="digit" className="form-control" />
                                </div>

                                <div className="col-sm-10 w-75 align-items-between">
                                    <div className="">
                                        <input type="checkbox" name="consent" className="" defaultChecked={true} required></input>
                                        <p1 className="padding-10"> I provide consent and authorize My Tax Refund Today (ABN 0000000000 and Tax Agent 000000000) to add me as a client in the Tax Agent Portal.</p1>
                                    </div>
                                </div>
                                <div className="col-sm-10 w-50 text-center">
                                    <button className="btn btn-primary w-75" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <form onSubmit={calculateTax}>
                        <div className="form-group">
                            <label htmlFor="totalIncome">Gross payment or total income:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="totalIncome"
                                name="totalIncome"
                                value={totalIncome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="taxWithheld">Total tax withheld:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="taxWithheld"
                                name="taxWithheld"
                                value={taxWithheld}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="deductions">Total deductions:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="deductions"
                                name="deductions"
                                value={deductions}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Calculate tax return
                        </button>
                    </form>
                </div>
            </section>

        </>
    );

}
export default Skills