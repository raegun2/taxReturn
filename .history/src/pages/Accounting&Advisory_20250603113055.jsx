
import { useState, useRef } from "react";
import { InlineWidget } from "react-calendly";
import  xeroLogo  from "../assets/xero-certified-advisor-logo.jpg";
import  myobLogo  from "../assets/myob-logo.jpg";
import  quickbooksLogo  from "../assets/quickbooks-logo.jpg";
import  xeroServices  from "../assets/Xero about-our-services2.jpg";
import { Helmet } from "react-helmet-async";

export default function AccountingAdvisory() {
    const [styleAttr1, setStyleAttr1] =useState({
        display: "none"
    });
    const [styleAttr2, setStyleAttr2] =useState({
        display: "none"
    });

    const handleClickStarter = () => {
            setStyleAttr1((changeStyle) => ({...changeStyle,
                                            display: changeStyle.display === "none" ? "flex" : "none"
    }));
        
    };
    const handleClickStandard = () => {
        setStyleAttr2((changeStyle) => ({...changeStyle,
                                        display: changeStyle.display === "none" ? "flex" : "none"
    }));    
    };
    const content1Useref = useRef(null);
    const handleClick = () => { content1Useref.current.scrollIntoView({ behavior: "smooth" }) };
    

    return (
        <>
            <Helmet>
                <title>Accounting & Advisory - Small Business to Sole Trader Accounting Management</title>
                <meta name="description" content="BAS Lodgement, Bookkeeping, Financial Statement Preparation." />
                <link rel="canonical" href="https://onlinetaxrefundtoday.com.au/AccountingAdvisory" />
            </Helmet>
            <section ref={content1Useref} className=" pt-lg-3 text-dark pt-5 pb-2 text-center d-flex flex-column">
                
                <div className=" container d-flex justify-content-center">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="text-light"> <span className=" text-primary">Affordable Bookkeeping Services</span> for Small Businesses</h1>
                            <p className="text-light lead my-4">
                            Hassle-free, affordable bookkeeping services for small businesses by Xero-certified bookkeepers supervised by CPA-qualified accountants.
                            </p>
                            <div className=" container text-start text-light rounded">
                                <ul className="">
                                    <li><span >No long-term contracts</span></li>
                                    <li><span >Fixed fee packages</span></li>
                                    <li><span >Xero-certified bookkeepers</span></li>
                                    <li><span >Over 40 years of combined experience</span></li>
                                    <li><span >Over 10,000 clients</span></li>
                                </ul>
                                <button onClick={handleClick} className="btn btn-warning btn-lg">General Enquiry</button>
                            </div>
                        </div>
                        <div className="col-10 col-lg-4 my-3 bg-white rounded">
                            <div className=" form-group row justify-content-center">                             
                                <div className="text-center">
                                    <InlineWidget url="https://calendly.com/erosapollon81/30min?hide_gdpr_banner=1?" />
                                </div>
                        </div>
                        </div>

                    </div>
                </div>
                    
                <div className="container h-50 py-3">
                    <div className="row justify-content-evenly">
                        <div className="col-lg-4 m-3 p-3 text-start text-light bg-info rounded">
                            <div className="row flex-column">
                                <div className="">
                                    <h3 className="fw-bolder">Starter</h3>
                                </div>
                                <div className="">
                                    <h2  className="fw-bolder p-2">$150.00/month + GST</h2>
                                </div>
                                <div className="">
                                <ul>
                                    <li>Unlimited support by telephone and email</li>
                                    <li>Preparation of quarterly BAS</li>
                                    <li>Preparation of year end working papers, reconciling balance sheet items</li>
                                    <li>Quarterly bank and credit card reconciliations</li>
                                </ul>
                                <p><em>This package is for a maximum of 100 bank/credit card transactions per month. Xero Subscription not included.</em></p>
                                </div>
                                <div className="">
                                    <button className="btn btn-white" type="button" onClick={handleClickStarter} >
                                        <span className="text-light dropdown-toggle">Add-ons</span>
                                    </button>
                                    <div id="dropdow-list1" style={styleAttr1} className="">
                                    <ul>
                                        <li>Invoice generation and management (high volume)</li>
                                        <li>PayPal account management and reconciliation</li>
                                        <li>Establish payroll (set-up)</li>
                                        <li>Process payroll, STP, and superannuation processing</li>
                                        <li>Monthly Instalment Activity Statement lodgement</li>
                                        <li>Additional customised reporting</li>
                                        <li>Additional online meetings</li>
                                        <li>Customised or anything extra – just ask us!</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col text-center bottom-0">
                                <button onClick={handleClick} className="btn btn-primary w-100">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 m-3 p-3 text-start text-light bg-warning rounded">
                            <div className="row flex-column">
                                <div className="">
                                    <h3 className="fw-bolder " >Standard</h3>
                                </div>
                                <div className="">
                                    <h2 className="fw-bolder p-2">$250.00/month + GST</h2>
                                </div>
                                <div className="">
                                <ul>
                                        <li className="text-light">Unlimited support by telephone and email</li>
                                        <li className="text-light">Preparation of quarterly or monthly BAS</li>
                                        <li className="text-light">Preparation of year-end working papers, reconciling balance sheet items</li>
                                        <li className="text-light">Monthly bank and credit card reconciliations</li>
                                        <li className="text-light">Quarterly financial statements and management reports prepared by a CPA</li>
                                        <li className="text-light">Enter and match customer receipts monthly – debtors reconciliation</li>
                                        <li className="text-light">Enter and match supplier payments monthly – creditor reconciliation</li>
                                        <li className="text-light">Quarterly 30-minute online meeting</li>
                                </ul>
                                <p><em>This package is for a maximum of 100 bank/credit card transactions per month. Xero Subscription not included.</em></p>
                                </div>
                                <div className="">
                                    <button className="btn" type="button" onClick={handleClickStandard} >
                                        <span className="text-light dropdown-toggle">Add-ons</span>
                                    </button>
                                    <div id="dropdow-list1" style={styleAttr2} className="">
                                        <ul>
                                            <li>Invoice generation and management (high volume)</li>
                                            <li>PayPal account management and reconciliation</li>
                                            <li>Establish payroll (set-up)</li>
                                            <li>Process payroll, STP, and superannuation processing</li>
                                            <li>Monthly Instalment Activity Statement lodgement</li>
                                            <li>Additional customised reporting</li>
                                            <li>Additional online meetings</li>
                                            <li>Customised or anything extra – just ask us!</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col text-center p-1">
                                    <button onClick={handleClick} className="btn btn-primary w-100 ">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light vw-100">
                <div className="container py-3">
                    <div className="row justify-content-between ">    
                        <div className="col-lg-6 p-4 bg-info align-content-center">
                            <img src={xeroServices} alt="Small Business" style={{height: "400px", width:"100%"}}/>   
                        </div>
                        
                        <div className="col-lg-5 p-5 text-start">
                            <div className="pt3">
                                <img src={ xeroLogo } alt="Xero" style={{height: "50px"}} />
                                <img src={ myobLogo } alt="MYOB" style={{height: "50px"}} />
                                <img src={ quickbooksLogo } alt="Quickbooks" style={{height: "50px"}} />
                            </div>
                                                            
                            <h2 className="text">Xero-Certified Small Business Bookkeepers</h2>
                            <p>Our Xero-certified bookkeepers specialise in helping small to medium 
                                businesses achieve a solid financial footing and grow into the long-term. 
                                With a high Google rating and many reviews, we are trusted to 
                                provide reliable bookkeeping services Australia-wide. Take the stress 
                                out of your finances and give yourself more time to grow your business 
                                by reaching out for a free consultation today.
                            </p>
                            <button onClick={handleClick} className="btn btn-primary btn-lg">General Enquiry</button>
                        </div>
                    
                    </div>
                </div>
            </section>

                
            
            
        
        </>
        
        
    );
}
