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
    const [processConsent, setProcessConsent] = useState(false);
    const [bsb, setBsb] = useState("");
    const [acc, setAcc] = useState("");
    const [error, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "firstName") setFirstName(value);
        if (name === "lastName") setLastName(value);
        if (name === "email") setEmail(value);
        if (name === "referral") setReferral(value);
        if (name === "consent") setConsent(value);
        if (name === "processConsent") setProcessConsent(value);
        if (name === "bsb") setBsb(value);
        if (name === "acc") setAcc(value);

        if (name === "phone") {
            const rawValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
            const limitedValue = rawValue.slice(0, 10);
            setPhone(limitedValue);
            
            
        }
        if (name === "dob") {
            const dobValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
            const limitedValue = dobValue.slice(0, 8);
            const fomattedValue = limitedValue.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3'); // Format as DD/MM/YYYY
            setDob(fomattedValue);
            // Validate date format (DDMMYYYY)  
            
        }
        // Validate TFN
        if (name === "tfn") {
            // Remove all non-digit characters
            const rawDigits = value.replace(/\D/g, '').slice(0, 9); // Limit to 9 digits

            // Format as `XXX XXX XXX` (3-digit groups)
            let formatted = rawDigits.replace(/(\d{3})(\d{3})(\d{0,3})/, (match, p1, p2, p3) =>
                p3 ? `${p1} ${p2} ${p3}` : `${p1} ${p2}`
            );

            setTfn(formatted.trim());

            // Validate TFN after stripping spaces
            const digitsOnly = rawDigits.split('').map(Number);

            const validateTFN = (digits) => {
                const weights = digits.length === 8
                    ? [10, 7, 8, 4, 6, 3, 5, 1]
                    : [1, 4, 3, 7, 5, 8, 6, 9, 10];

                if (digits.length !== weights.length) return false;
                const sum = digits.reduce((acc, digit, i) => acc + digit * weights[i], 0);
                return sum % 11 === 0;
            };

            if ((digitsOnly.length === 8 || digitsOnly.length === 9) && !validateTFN(digitsOnly)) {
                setError(true);
                setErrorMessage("Invalid TFN. Please double-check the number.");
            } else {
                setError(false);
                setErrorMessage(null);
            }
        }


    
    
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
        sms_message: `Dear ${firstName}, Your accountant will be in touch with you soon. Please keep your phone handy for a call from us. Thank you for choosing Online Tax Refund Today.`,
        consent: consent,
        processConsent: processConsent,
        bsb: bsb,
        acc: acc,
        // Add any other fields you want to send
      };
      
       

      try {
        const res = await fetch("https://onlinetaxrefundtoday.com.au/send_sms.php", {
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
        setProcessConsent(false);
        setAcc("");
        setBsb("");

    };
  


      
    return (
    <div className="col-10 col-lg-4 p-4 my-3 bg-warning rounded">
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className=" form-group row justify-content-center px-4">                             
                    <div className="text-center">
                        <h2>Free Refund</h2>
                        <h2>Estimate</h2>
                        <p>Simply fill out the form and we’ll be in touch with you shortly.</p>
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
                        <input onChange={handleChange} value={tfn} placeholder="Tax File No." name="tfn" id="tfn" type="text" autoComplete="off" className="form-control" required />
                    </div>
                    
                    <div className=" pt-1">
                        <input onChange={handleChange} value={phone} placeholder="Mobile" name="phone" id="phone" type="tel" autoComplete="off" className="form-control" required />
                    </div>
                    
                    <div className=" pt-1">
                        <input onChange={handleChange} value={referral} placeholder="Referral Code (Optional)" name="referral" id="referral" type="digit" className="form-control"/>
                    </div>

                    <div className=" pt-1 text-start">
                        <div className="">
                            <input type="checkbox" value={consent} name="consent" id="consent" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />    
                            <span> I provide <Link to="/consent" className="text-dark text-decoration-underline">consent</Link> and authorize OnlineTaxRefundToday (ABN 0000000000 and Tax Agent 000000000) to add me as a client in the Tax Agent Portal.</span>
                        </div>
                    </div>
                    <div className=" pt-1 text-start">
                        <div className="">
                            <input type="checkbox" value={processConsent} name="processConsent" id="processConsent" checked={processConsent} onChange={(e) => setProcessConsent(e.target.checked)} />    
                            <span > I would like to proceed my tax return with OnlineTaxRefundToday.</span>
                        </div>
                    </div>
                    {processConsent === true && (
                        <>  
                            <div className=" pt-1">
                                <input onChange={handleChange} value={bsb} placeholder='your BSB number' name="bsb" id="bsb" type="text" className="form-control pt-1"/>  
                            </div>
                            <div className=" pt-1">
                                <input onChange={handleChange} value={acc} placeholder='your bank account number' name="acc" id="acc" type="text" className="form-control pt-1"/>
                            </div>
                            <div>
                            Provide your bank details to improve processing time.
                            </div>
                        </>
                    )}
                    <div className="w-50 text-center pt-1">
                        <input className="btn btn-primary w-75 " id="button"value="Submit" type="submit" />
                    </div>
                    {response && (
                        <div style={{ marginTop: '20px' }}>
                            <pre><h6>{response}</h6></pre>
                        </div>
                    )}
                    {error && (
                        <div style={{ marginTop: '20px' }}>
                            <pre><h6>{errorMessage}</h6></pre>
                        </div>
                    )}
                        
            </div>             
        </form>
    </div>
    );
};
export default ContactForm;