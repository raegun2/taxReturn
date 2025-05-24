import { Link } from "react-router-dom";
import React, { useState } from 'react';


function ContactForm() {

    const [response, setResponse] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [phone, setPhone] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [tfn, setTfn] = useState("");
    const [referral, setReferral] = useState("");
    const [consent, setConsent] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "firstName") setFirstName(value);
        if (name === "phone") setPhone(value);
        if (name === "lastName") setLastName(value);
        if (name === "email") setEmail(value);
        if (name === "dob") setDob(value);
        if (name === "tfn") setTfn(value);
        if (name === "referral") setReferral(value);
        if (name === "consent") setConsent(value);
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const payload = {

        phone: phone,
        firstName: firstName,
        lastName: lastName,
        email: email,
        dob: dob,
        tfn: tfn,
        referral: referral,
        sms_message: `Dear ${firstName}, Your accountant will be in touch with you soon. Please keep your phone handy for a call from us. Thank you for choosing Same Day Tax Refund.`,
        consent: consent,
      };
      
       // clear the form fields after submission
       setFirstName("");
       setPhone("");
       setLastName("");
       setEmail("");
       setDob("");
       setTfn("");
       setReferral("");
       setConsent(false);

      try {
        const res = await fetch("http://localhost/mytax/send_sms.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
        

        const result = await res.json();
        setResponse("Successfully submitted!");
      } catch (error) {
        console.error("SMS sending failed:", error);
        setResponse("Failed to submit, try again");
      }


      // clear the form fields after submission
       setFirstName("");
       setPhone("");
       setLastName("");
       setEmail("");
       setDob("");
       setTfn("");
       setReferral("");
       setConsent(false);

    };
  


      
    return (
    <div className="col-10 col-lg-4 p-4 my-3 bg-warning rounded">
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className=" form-group row justify-content-center px-4">                             
                    <div className="text-center">
                        <h2>Free Refund</h2>
                        <h2>Estimate</h2>
                        <p>Simply fill out the form and we’ll be in touch.</p>
                    </div>
                    <div className="">
                        <input onChange={handleChange} value={firstName} placeholder="First Name" name="firstName" id="first-name"type="text" autoComplete="off" autoFocus className="form-control" required/>
                    </div>
                    
                    <div className="pt-1">
                        <input onChange={handleChange} value={lastName} placeholder="Last Name" name="lastName" id="last-name" type="text" autoComplete="off" className="form-control" required/>
                    </div>
                    
                    <div className=" pt-1">
                        <input onChange={handleChange} value={email} placeholder="Email" name="email" id="email" type="email" autoComplete="off" className="form-control" required/>
                    </div>
                    
                    <div className=" pt-1">
                        <input onChange={handleChange} value={dob} placeholder="Date of Birth (DD/MM/YYYY)" name="dob" id="dob" type="text"  autoComplete="off" className="form-control" required/>
                    </div>
                    
                    <div className=" pt-1">
                        <input onChange={handleChange} value={tfn} placeholder="Tax File No." pattern="\d{9}" name="tfn" id="tfn" type="text" autoComplete="off" className="form-control" required />
                    </div>
                    
                    <div className=" pt-1">
                        <input onChange={handleChange} value={phone} placeholder="Mobile" name="phone" id="phone" type="tel" autoComplete="off" className="form-control" required />
                    </div>
                    
                    <div className=" pt-1">
                        <input onChange={handleChange} value={referral} placeholder="Referral Code (Optional)" name="referral" id="referral" type="digit" className="form-control"/>
                    </div>

                    <div className=" pt-1 align-items-between">
                        <div className="">
                            <input type="checkbox" value={consent} name="consent" id="consent" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />    
                            <span className="padding-10"> I provide <Link to="/consent" className="text-dark text-decoration-underline">consent</Link> and authorize Same Day Tax refund (ABN 0000000000 and Tax Agent 000000000) to add me as a client in the Tax Agent Portal.</span>
                        </div>
                    </div>
                    <div className=" pt-1 align-items-between">
                        <div className="">
                            <input type="checkbox" value={consent} name="processConsent" id="processConsent" checked={processConsent} onChange={(e) => setProcessConsent(e.target.checked)} />    
                            <span className="padding-10"> I would like to proceed my tax return with onlinetaxrefundtoday.com.au</span>
                        </div>
                    </div>
                    <div className="w-50 text-center pt-1">
                        <input className="btn btn-primary w-75 " id="button"value="Submit" type="submit" />
                    </div>
                    {response && (
                        <div style={{ marginTop: '20px' }}>
                            <pre><h6>{response}</h6></pre>
                        </div>
                    )}
                        
            </div>             
        </form>
    </div>
    );
};
export default ContactForm;