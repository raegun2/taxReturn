import ContactForm from "../TaxContactForm";
import { Link } from 'react-router-dom';

function Showcase1() {
   



    return (
        
            <section className=" text-dark pt-3 pb-2 text-center">
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
        
        
    );
}
export default Showcase1






