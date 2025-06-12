import { Link } from "react-router-dom";
import React, { useState } from 'react';



function ContactForm() {
  const [response, setResponse] = useState(null);
  const [taxYear, setTaxYear] = useState("2024-2025");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [tfn, setTfn] = useState("");
  const [referral, setReferral] = useState("");
  const [consent, setConsent] = useState(false);
  const [processConsent, setProcessConsent] = useState(false);
  const [accName, setAccName] = useState("");
  const [bsb, setBsb] = useState("");
  const [acc, setAcc] = useState("");
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    //reset error and response messages on input change
    setErrorMessage(null);
    setResponse(null);

    switch (name) {
      case "taxYear":
        setTaxYear(value);
        break;
      case "firstName":
        setFirstName(value.replace(/[^a-zA-Z ]/g, '').trimStart());
        break;
      case "lastName":
        setLastName(value.replace(/[^a-zA-Z ]/g, '').trimStart());
        break;
      case "email":
        setEmail(value.trim().toLowerCase());
        break;
      case "referral":
        setReferral(value);
        break;
      case "consent":


        setConsent(checked);
        break;
      case "processConsent":
        setProcessConsent(checked);
        break;
      case "accName":
        setAccName(value.replace(/[^a-zA-Z ]/g, '').trimStart());
        break;
      case "bsb":
        setBsb(value);
        break;
      case "acc":
        setAcc(value);
        break;
      case "phone": {
        const rawValue = value.replace(/\D/g, '').slice(0, 10);
        setPhone(rawValue);
        break;
      }
      case "dob": {
        const dobValue = value.replace(/\D/g, '').slice(0, 8);
        const formattedValue = dobValue.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
        setDob(formattedValue);
        break;
      }
      case "tfn": {
        const rawDigits = value.replace(/\D/g, '').slice(0, 9);
        const formatted = rawDigits.replace(/(\d{3})(\d{3})(\d{0,3})/, (match, p1, p2, p3) =>
            p3 ? `${p1} ${p2} ${p3}` : `${p1} ${p2}`
        );
        setTfn(formatted.trim());

        const digitsOnly = rawDigits.split('').map(Number);
        const validateTFN = (digits) => {
            const weights = digits.length === 8
            ? [10, 7, 8, 4, 6, 3, 5, 1]
            : [1, 4, 3, 7, 5, 8, 6, 9, 10];

            if (digits.length !== weights.length) return false;
            const sum = digits.reduce((acc, digit, i) => acc + digit * weights[i], 0);
            return sum % 11 === 0;
        };

        if (!(digitsOnly.length === 8 || digitsOnly.length === 9)) {
            setError(true);
            setErrorMessage("TFN must contain 8 or 9 digits.");
        } else if (!validateTFN(digitsOnly)) {
            setError(true);
            setErrorMessage("Invalid TFN.");
        } else {
            setError(false);
            setErrorMessage(null);
        }
        break;
        }

      default:
        break;
    }
  };

  const validateFields = () => {
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !dob.trim() || !phone.trim() || !tfn.trim()) {
      return "Please fill in all required fields.";
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      return "Phone number must be 10 digits.";
    }

    const dobPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
    if (!dobPattern.test(dob)) {
      return "DoB must be in DD/MM/YYYY.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Invalid email address.";
    }

    if (error) {
      return "Invalid TFN.";
    }

    if (!consent) {
      return "Please provide consent.";
    }

    if (processConsent) {
      if (!bsb.trim() || !acc.trim()) {
        return "Please check your BSB and account number.";
      }
      if (!/^\d{6}$/.test(bsb)) {
        return "BSB must be exactly 6 digits.";
      }
      if (!/^\d{5,10}$/.test(acc)) {
        return "Account number must be 5–10 digits.";
      }
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateFields();
    if (validationError) {
      setResponse(validationError);
      return;
    }

    const payload = {
      taxYear,
      phone,
      firstName,
      lastName,
      email,
      dob,
      tfn,
      referral,
      sms_message: `Dear ${firstName}, OnlineTaxRefundToday accountant will be in touch with you soon for your tax refund for ${taxYear}. Please keep your phone handy for a call from us. Thank you for choosing us. please do not reply to this message.`,
      consent,
      processConsent,
      accName,
      bsb,
      acc,
    };

    try {
      const res = await fetch("http://localhost/mytax/send_sms.php", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        setResponse(null);
        setErrorMessage(result.error || "Failed to communicate with your accountant, Please try again");
        console.error("Error response:", result);
        return;
      }
      console.log("SMS sent successfully:", result);
      setErrorMessage(null);
      setResponse("Successfully submitted!");
      //setFirstName("");
      //setTaxYear("2024-2025");
      //setPhone("");
      //setLastName("");
      //setEmail("");
      //setDob("");
      //setTfn("");
      //setReferral("");
      //setConsent(false);
      //setProcessConsent(false);
      //setAcc("");
      //setBsb("");
      //setAccName("");
      
    } catch (error) {
      console.error("SMS sending failed:", error);
      setResponse(null);
      setErrorMessage("Failed to submit, try again");
      return;
    }

    
    
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
                    <div className="pt-1">
                      <select
                        onChange={handleChange}
                        value={taxYear}
                        name="taxYear"
                        id="tax-year"
                        className="form-control"
                        required
                      >
                        <option value="">Select Financial Year End</option>
                        <option value="2024-2025">2024–2025</option>
                        <option value="2023-2024">2023–2024</option>
                        <option value="2022-2023">2022–2023</option>
                        <option value="2021-2022">2021–2022</option>
                        <option value="2020-2021">2020–2021</option>
                      </select>
                    </div>

                    <div className="pt-1">
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
                            <span> I provide <Link to="/consent" className="text-dark text-decoration-underline">consent</Link> and authorize OnlineTaxRefundToday (ABN 32105919041 and Tax Agent 26262022) to add me as a client in the Tax Agent Portal.</span>
                        </div>
                    </div>
                    <div className=" pt-1 text-start">
                        <div className="">
                            <input type="checkbox" value={processConsent} name="processConsent" id="processConsent" checked={processConsent} onChange={(e) => setProcessConsent(e.target.checked)} />    
                            <span > No upfront fee option.</span>
                        </div>
                    </div>
                    {processConsent === true && (
                        <>  
                          <div className="bankdetails">
                            <div className="text-sm text-muted">
                              <strong>*</strong> Provide your bank details for Direct Transfer.
                            </div>
                            <div className=" pt-1">
                                <input onChange={handleChange} value={accName} placeholder='Name of Account holder' name="accName" id="accName" type="text" className="form-control pt-1"/>  
                            </div>
                            <div className=" pt-1">
                                <input onChange={handleChange} value={bsb} placeholder='your BSB number' name="bsb" id="bsb" type="text" className="form-control pt-1"/>  
                            </div>
                            <div className=" pt-1">
                                <input onChange={handleChange} value={acc} placeholder='your bank account number' name="acc" id="acc" type="text" className="form-control pt-1"/>
                            </div>
                          </div>  
                        </>
                    )}
                    <div className="w-50 text-center pt-1">
                        <input className="btn btn-primary w-75 " id="button"value="Submit" type="submit" />
                    </div>
                    {(response || errorMessage) && (
                        <div className="col-12 mt-3">
                            {response && (
                            <div className="alert alert-info text-center">
                                {response}
                            </div>
                            )}
                            {errorMessage && (
                            <div className="alert alert-danger text-center">
                                {errorMessage}
                            </div>
                            )}
                        </div>
                        )}

                        
            </div>             
        </form>
    </div>
    );
};
export default ContactForm;