


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
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.818101445008!2d153.07618737623994!3d-27.537109719583338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915b16887eaaab%3A0xf65fb3bc6a20f84d!2sSuite%202B%2F1420%20Logan%20Rd%2C%20Mount%20Gravatt%20QLD%204122!5e0!3m2!1sen!2sau!4v1747976615720!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
                                    </div>
                                </div>
                                              
                                
                            </div>                       
                        </div>
                    </section>
            
        
    );
}
export default ContactMe;


