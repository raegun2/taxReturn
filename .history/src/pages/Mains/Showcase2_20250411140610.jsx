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
                        <div className="col-lg">
                            <div className="card h-100">  
                                <div className="card-body">
                                    <div className="">
                                        <h1 className="fw-bold" >#1</h1>
                                    </div>
                                    <div className="">
                                    <p className="card-text py-3">HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</p>
                                    <Link to="/AccountingAdvisory"><button className="btn w-50 btn-primary">Read More</button></Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="py-3 ">
                                        <i><span><img className="w-25" src="src/assets/day-event-tax-icon.svg"></img></span></i>
                                    </div>
                                    <div className="">
                                    <p className="card-text mb-3">Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML </p>
                                    <Link to="/AccountingAdvisory"><button className="btn w-50 btn-primary">Read More</button></Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="py-3">
                                        <i><span><img className="w-25" src="src/assets/recurring-subscription-icon.svg"></img></span></i>    
                                    </div>
                                    <div className="">
                                        <p className="card-text py-3">JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. </p>
                                        <Link to="/AccountingAdvisory"><button className="btn w-50 btn-primary">Read More</button></Link>
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