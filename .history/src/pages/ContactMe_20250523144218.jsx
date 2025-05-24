


import ContactForm from "../components/TaxContactForm";

const ContactMe = () => {
    return (
    
                    <section className="contactUs">
                        <div className="container bg-light">
                            <div className="row d-flex align-items-center justify-content-evenly flex-row-reverse">
                            <ContactForm /> 
                                <div className="col-lg-6 pt-5 order-lg-1">
                                    <div className="row justify-content-center">
                                        <div className="col-5 w-100">
                                            <h1 className="text-center fw-bold">Contact Info</h1>
                                            <ul className="list-group list-group-flush lead">
                                                <li className="list-group-item py-3">
                                                    <span className="fw-bold">Main Location:</span> Suite 2B, 1420 Logan Road Mount Gravatt 4122 AU {/* spell-checker: disable-line */}
                                                </li>
                                                <li className="list-group-item py-3">
                                                    <span className="fw-bold">Mobile phone:</span> (07) 3217 0317
                                                </li>
                                                <li className="list-group-item py-3">
                                                    <span className="fw-bold">Email:</span> info@milestoneaccounting.com.au
                                                </li>
                                            </ul>
                                        </div>
                                        <iframe src="https://storage.googleapis.com/maps-solutions-d240ewk7tm/locator-plus/adbh/locator-plus.html"
                                            width="100%" height="100%"
                                            style="border:0;"
                                            loading="lazy">
                                        </iframe>  
                                    </div>
                                </div>
                                              
                                
                            </div>                       
                        </div>
                    </section>
            
        
    );
}
export default ContactMe;


