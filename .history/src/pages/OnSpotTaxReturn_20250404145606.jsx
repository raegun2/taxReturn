import ContactForm from "../pages/TaxContactForm";

export default function Taxreturn2025() {
   



    return (
        
            <section className=" text-dark pt-3 pb-2 text-center">
                <div className=" container d-flex justify-content-center">
                    <div className="">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8">
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
                                
                                 

                            </div>
                            
                        </div>
                        <ContactForm />
                    </div>
                    </div>
                </div>
            </section>
        
        
    );
}
