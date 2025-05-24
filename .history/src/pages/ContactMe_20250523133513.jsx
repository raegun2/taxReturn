


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
                                        <gmp-map center="-27.537033081054688,153.07879638671875" zoom="14" map-id="DEMO_MAP_ID">
                                            <gmp-advanced-marker position="-27.537033081054688,153.07879638671875" title="My location"></gmp-advanced-marker>
                                        </gmp-map>      
                                    </div>
                                </div>
                                              
                                
                            </div>                       
                        </div>
                    </section>
            
        
    );
}
export default ContactMe;


