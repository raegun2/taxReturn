import { Link } from "react-router-dom"

function Showcase2() {
return ( 
    <>

        <div className="container mb-2">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-4">
                    <img className="" src="src\assets\tpa-cpa-accreditations.png"></img>
                </div>
                <div className="col-lg-6 text-start">
                    <div className="lead pb-3">
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
                        <Link to="/OnSpotTaxReturn"><button className="btn w-25 btn-primary" >Read more</button></Link>
                    </div>
                </div>
            </div>
            
            
        </div>
        

        <section className="professionals">
                <div className="container pb-2">
                <h2 className="text-warning fw-bold">How to Get</h2>
                <h2 className="fw-bolder">Your Tax Refund</h2>
                    <div className="row text-center g-2" >
                        <div className="col-lg ">
                            <div className="card h-100 border-white">  
                                <div className="bg-primary card-body rounded-circle p-3">
                                    <div className="m-2">
                                        <h1 className="fw-bold" >#1</h1>
                                        <h3 className="fw-bold">FILL IN THE <br />FORM</h3>
                                    </div>
                                    <div className="">
                                        <p className="card-text mb-3">Fill in the online form above or email your group certificate [PAYG summary] to info@taxrefundtoday.com.au</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                        <div className="card h-100 border-white">  
                        <div className="bg-warning card-body rounded-circle p-3">
                                    <div className="m-2">
                                    <h1 className="fw-bold" >#2</h1>
                                    <h3 className="fw-bold">WE CALL YOU BACK</h3>
                                    </div>
                                    <div className="">
                                    <p className="card-text mb-3">A qualified tax accountant will call you and discuss your tax situation. They will then give you a FREE refund estimate. You then have the option to either wait two weeks or you can ask us for our 1-hour refund option.</p>
                                    
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                        <div className="card h-100 border-white">  
                        <div className="bg-info card-body rounded-circle p-3">
                                    <div className="m-2">
                                        <h1 className="fw-bold" >#3</h1>
                                        <h3 className="fw-bold">GET YOUR REFUND</h3>    
                                    </div>
                                    <div className="">
                                        <p className="card-text mb-3">A qualified tax accountant will call you and discuss your tax situation. They will then give you a FREE refund estimate. You then have the option to either wait two weeks or you can ask us for our 1-hour refund option.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  );
}

export default Showcase2