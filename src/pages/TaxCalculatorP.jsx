import TaxCalculator from "../components/TaxCalculator";
import ContactForm from "../components/TaxContactForm";
import { Helmet } from "react-helmet-async";

export default function TaxCalculatorP() {
   
    return (
            <>
                <Helmet>
                    <title>Free Tax Refund Calculator - Online Tax Refund Today</title>
                    <meta name="description" content="Free Tax Calculator 2025. Get your tax refund fast and easy. " />
                    <link rel="canonical" href="https://onlinetaxrefundtoday.com.au/" />
                </Helmet>

                <section className=" text-dark pb-2 text-center">
                    <div className=" container d-flex justify-content-center">
                        <div className="">
                        <div className="row align-items-center justify-content-evenly">
                            <ContactForm/>
                            <div className="col-lg-7 col-11 order-lg-first">
                                <TaxCalculator/>
                            </div>            
                        </div>
                        </div>
                    </div>
                </section>
            </>
            
        
        
    );
}
