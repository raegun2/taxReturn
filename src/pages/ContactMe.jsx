import ContactForm from "../components/TaxContactForm";
import { Helmet } from "react-helmet-async";

const ContactMe = () => {
    return (
        <>
                    <Helmet>
                        <title>Contact Us - Online Tax Refund Today</title>
                        <meta name="description" content="Learn more about our team and services." />
                    </Helmet>
    
                    <section className="contactUs pt-lg-3 pt-5">
                        <div className="container bg-light">
                            <div className="row d-flex align-items-center justify-content-evenly flex-row-reverse">
                                <ContactForm /> 
                                <div className="col-lg-6 pt-5 order-lg-1">
                                    <div className="row justify-content-center">
                                        <div className="col-5 w-100">
                                            <h1 className="text-center fw-bold">Contact Info</h1>
                                            <ul className="list-group list-group-flush lead">
                                                <li className="list-group-item py-3">
                                                    <span className="fw-bold">Main Location:</span> Suite 2B, 1420 Logan Road Mount Gravatt 4122 AU <br/> (by appointment only)
                                                </li>
                                                <li className="list-group-item py-3">
                                                    <span className="fw-bold">Mobile phone:</span> +61 435 488 983 
                                                </li>
                                                <li className="list-group-item py-3">
                                                    <span className="fw-bold">Email:</span> info@onlinetaxrefundtoday.com.au
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.818101445008!2d153.07618737623994!3d-27.537109719583338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915b16887eaaab%3A0xf65fb3bc6a20f84d!2sSuite%202B%2F1420%20Logan%20Rd%2C%20Mount%20Gravatt%20QLD%204122!5e0!3m2!1sen!2sau!4v1747976615720!5m2!1sen!2sau" className="col-lg-6 py-5 w-100" height="500" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                            
                                        </div>        
                                    </div>
                                </div>
                                              
                                
                            </div>                       
                        </div>
                    </section>
            
        </>
    );
}
export default ContactMe;


