import ContactForm from "../components/TaxContactForm";
import { Link } from 'react-router-dom';
import { useRef } from "react";
import TaxCalculator from "../components/TaxCalculator";
import  xeroLogo  from "../assets/xero-certified-advisor-logo.jpg";
import  myobLogo  from "../assets/myob-logo.jpg";
import  quickbooksLogo  from "../assets/quickbooks-logo.jpg";
import  xeroServices  from "../assets/Xero about-our-services2.jpg";
import taxPractitioners from "../assets/tpa-cpa-accreditations3.png";
import xeroServices from "../assets/xero-services.png";

function MainPage1() {
    const content1Useref = useRef(null);
    const handleClick = () => { content1Useref.current.scrollIntoView({ behavior: "smooth" }) };
    return (
        <>
            <section ref ={content1Useref} className=" pt-lg-3 pt-5 text-dark pb-2 text-center">
                <div className=" container d-flex justify-content-center">
                    <div className="">
                    <div className="row align-items-center justify-content-evenly">
                        <div className="col-lg-7">
                            <h1 className="text-light">Maximise Your <span className="text-warning">Tax Refund in 2025</span></h1>
                            <p className="text-light lead my-4">
                                Want to get the most from your tax refund in 2025? 
                                Our registered tax agents are here to help. 
                                Ask about your tax eligible offsets and expenses to minimize your tax to pay!
                            </p>
                            <div className=" container text-start text-light rounded">
                                <ul>
                                    <li><span>$0 upfront fee option</span></li>
                                    <li><span>Easy online process</span></li>
                                    <li><span>Expert tax agents</span></li>
                                </ul>
                                                                
                                <Link to="/TaxReturn2025"><button className="btn btn-primary btn-lg">Read More</button></Link> 

                            </div>
                            
                        </div>
                        <ContactForm />
                    </div>
                    </div>
                </div>
            </section>
            <TaxCalculator />
            <section className="stepsToRefund text-center vw-100 bg-light">
            <div className="container pb-2 t text-white">
            <h2 className="text-warning fw-bold">3 steps to Get</h2>
            <h2 className="fw-bolder text-dark pb-3">Your Tax Refund</h2>
                <div className="row text-center justify-content-evenly pb-3">
                    <div className=" col-lg-4 col-8">
                        <div className="card h-100 w-100 border-0 bg-light" >  
                            <div className="bg-primary card-body rounded-circle p-3">
                                <div className="">
                                    <h1 className="fw-bold" >#1</h1>
                                    <h3 className="fw-bold">FILL IN THE <br/>FORM</h3>
                                </div>
                                <div className="">
                                    <p className="card-text mb-3 p-3">Fill in the online form above or email your group certificate [PAYG summary] to info@onlinetaxrefundtoday.com.au</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-8">
                    <div className="card h-100 w-100 border-0 bg-light" >  
                    <div className="bg-warning card-body rounded-circle p-3">
                                <div className="">
                                <h1 className="fw-bold" >#2</h1>
                                <h3 className="fw-bold">WE CALL YOU <br />BACK</h3>
                                </div>
                                <div className="">
                                <p className="card-text px-3 ">A qualified tax accountant will call you and discuss your tax situation. They will then give you a FREE refund estimate. You then have the option to either wait two weeks or you can ask us for our 1-hour refund option.</p>
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-8">
                    <div className="card h-100 border-0 bg-light" >  
                    <div className="bg-info card-body rounded-circle p-3">
                                <div className="">
                                    <h1 className="fw-bold" >#3</h1>
                                    <h3 className="fw-bold">GET YOUR <br/>REFUND</h3>    
                                </div>
                                <div className="">
                                    <p className="card-text px-3">A qualified tax accountant will call you and discuss your tax situation. They will then give you a FREE refund estimate. You then have the option to either wait two weeks or you can ask us for our 1-hour refund option.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="container mb-2">
            <div className="row justify-content-evenly align-items-center">
                <div className="col-lg-4 p-5 text-center">
                    <img className="" src={taxPractitioners} width={250} height={250} alt='Tax Practitioners Board'></img>
                </div>
                <div className="col-lg-6 text-start">
                    <div className="lead p-4">
                        <h1><span className="text-warning">Why Lodge Your Tax Return</span> With Us?</h1>
                    </div>
                <div>
                        
                    </div>
                    <h6>Below are a few of the compelling reasons why you should consider using our tax agents<br />to prepare your tax return:</h6>
                    <ul>
                        <li>
                            <h6>Trusted by online clients.</h6>
                        </li>
                        <li>
                            <h6>Certified CPA practice</h6>
                        </li>
                        <li>
                            <h6>Free tax refund estimate before working with you</h6>
                        </li>
                        <li>
                            <h6>Specialists with over years’ combined experience to maximise your refund.</h6>
                        </li>
                        <li>
                            <h6>Instant tax refund and $0 upfront options</h6>
                        </li>
                        <li>
                            <h6>Easy online process.</h6>
                        </li>
                        <p>To learn more about our team of expert tax agents, click the button below.</p>
                    </ul>
                    <div>
                    <button onClick={ handleClick } className="btn w-25 btn-primary" >Read more</button>
                    </div>
                </div>
            </div>
        </div>
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
                            With a Google rating of 4.7 and over 1200 reviews, we are trusted to 
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
export default MainPage1;






