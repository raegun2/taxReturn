import ContactForm from "../components/TaxContactForm";
import { Link } from 'react-router-dom';
import { useRef } from "react";
import TaxCalculator from "../components/TaxCalculator";
import proJung from "../assets/pro_jung.jpg";
import proLee from "../assets/pro_lee.jpg";
import proHyunju from "../assets/pro_hyunju.png";
import taxPractitioners from "../assets/tpa-cpa-accreditations3.png";

function MainPage1() {
    const content1Useref = useRef(null);
    const handleClick = () => { content1Useref.current.scrollIntoView({ behavior: "smooth" }) };
    return (
        <>
            <section ref ={content1Useref} className=" text-dark pt-3 pb-2 text-center">
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
            <section className="stepsToRefund bg-light text-center vw-100">
            <div className="container pb-2 t text-white">
            <h2 className="text-warning fw-bold">3 steps to Get</h2>
            <h2 className="fw-bolder text-dark pb-3">Your Tax Refund</h2>
                <div className="row text-center g-1" >
                    <div className="col-lg ">
                        <div className="card h-100 border-0 bg-light">  
                            <div className="bg-primary card-body rounded-circle p-3">
                                <div className="m-2">
                                    <h1 className="fw-bold" >#1</h1>
                                    <h3 className="fw-bold">FILL IN THE <br/>FORM</h3>
                                </div>
                                <div className="">
                                    <p className="card-text mb-3 p-3">Fill in the online form above or email your group certificate [PAYG summary] to info@taxrefundtoday.com.au</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg">
                    <div className="card h-100 border-0 bg-light">  
                    <div className="bg-warning card-body rounded-circle p-3">
                                <div className="m-2">
                                <h1 className="fw-bold" >#2</h1>
                                <h3 className="fw-bold">WE CALL YOU <br />BACK</h3>
                                </div>
                                <div className="">
                                <p className="card-text mb-3 p-3">A qualified tax accountant will call you and discuss your tax situation. They will then give you a FREE refund estimate. You then have the option to either wait two weeks or you can ask us for our 1-hour refund option.</p>
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg">
                    <div className="card h-100 border-0 bg-light">  
                    <div className="bg-info card-body rounded-circle p-3">
                                <div className="m-2">
                                    <h1 className="fw-bold" >#3</h1>
                                    <h3 className="fw-bold">GET YOUR <br/>REFUND</h3>    
                                </div>
                                <div className="">
                                    <p className="card-text mb-3 p-3">A qualified tax accountant will call you and discuss your tax situation. They will then give you a FREE refund estimate. You then have the option to either wait two weeks or you can ask us for our 1-hour refund option.</p>
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
                            <h6>Trusted by more than 68,000 clients.</h6>
                        </li>
                        <li>
                            <h6>Average Google rating of 4.7 with over 1,000 reviews.</h6>
                        </li>
                        <li>
                            <h6>Certified CPA practice</h6>
                        </li>
                        <li>
                            <h6>Free tax refund estimate before working with you</h6>
                        </li>
                        <li>
                            <h6>Specialists with over 30 years’ combined experience to maximise your refund.</h6>
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
        <section className="instructors">
            <div className="container">
                <div className="row text-center g-2  d-inline-grid">
                    <div className="col-lg">
                        <div className="card w-100">
                            <div className="card-body p-4 ">
                                <img src={proJung} alt="Accountant" className="img-fluid  rounded-circle mb-3" style={{height: "11vh"}}></img>
                                <h3>Troy Jung</h3>
                                <p>Director, Senior CPA Accountant</p>
                                <p>John is a corporate finance officer with 10 years of experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="card w-100">
                            <div className="card-body p-4">
                                <img src={proLee} alt="Accountant" className="img-fluid  rounded-circle mb-3" style={{height: "11vh"}}></img>
                                <h3>Raegun Lee</h3>
                                <p>Tax Accountant, IT Engineer</p>
                                <p>Jane is a public practice Accountant with 6 years of experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="card w-100">
                            <div className="card-body p-4">
                                <img src={proHyunju} alt="Accountant" className="img-fluid rounded-circle mb-3" style={{height: "11vh"}}></img>
                                <h3>Julie Lee</h3>
                                <p>Individual Tax Accountant</p>
                                <p>Julie is an individual tax ccountant with 5 years of experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
        
        
    );
}
export default MainPage1;






