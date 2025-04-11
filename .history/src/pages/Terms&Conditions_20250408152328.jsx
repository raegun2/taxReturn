import { Link } from "react-router-dom";

export default function TermsAndConditions ()  {
    return (
        <section className="terms&conditions">
            <div className="container bg-white text-start ">
                <div className="container">
                    <p className="text">Our Terms and Conditions of Service were last updated on: 25th June 2023. Please ensure that you have read and reviewed these Terms and Conditions in conjunction with our Privacy Policy (<Link to="/privacypolicy"><strong>here</strong></Link>).</p>
                    <p className="text">If you have any questions or queries in relation to our Terms and Conditions or our Privacy Policy, please do not hesitate to contact us by using the contact details below.</p>
                    <p className="text">In these Terms and Conditions, unless otherwise specified, the use of the words 'us', 'we', or 'our' refers to Planetech International Pty Ltd (ACN 145 232 319) trading as My Tax Refund Today (including any of our agents). We are a Registered Tax Agent (Registration No. 23282009) which owns, operates and controls the website (inclusive of all electronic or online facilities and any underlying software and platform through which you may access and use our services) accessible at <a href="https://www.mytaxrefundtoday.com.au/">https://www.mytaxrefundtoday.com.au/</a> (<strong>Website</strong>). We provide <strong>Tax Agent Services</strong>, being any service that relates to ascertaining your liabilities, obligations or entitlements under applicable taxation laws of Australia. Tax Agent Services includes but is not limited to services such as preparing returns, notices, statements, applications or other documents regarding your liabilities, obligations or entitlements under an applicable taxation law. Any use of the word 'you' or 'your' refers to you as a user, being an individual or entity accessing or using our Website.</p>
                    <h2 className="num-lvl-1"><b>Acknowledgment&nbsp;</b></h2>
                                                  
                </div>

            </div>

        </section>
    );
}

