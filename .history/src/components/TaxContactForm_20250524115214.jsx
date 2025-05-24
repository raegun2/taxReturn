import { Link } from "react-router-dom";
import React, { useState } from 'react';



function ContactForm() {
  const [response, setResponse] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [tfn, setTfn] = useState("");
  const [referral, setReferral] = useState("");
  const [consent, setConsent] = useState(false);
  const [processConsent, setProcessConsent] = useState(false);
  const [bsb, setBsb] = useState("");
  const [acc, setAcc] = useState("");
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    switch (name) {
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
      phone,
      firstName,
      lastName,
      email,
      dob,
      tfn,
      referral,
      sms_message: `Dear ${firstName}, Your accountant will be in touch with you soon. Please keep your phone handy for a call from us. Thank you for choosing Online Tax Refund Today.`,
      consent,
      processConsent,
      bsb,
      acc,
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
                <div className="col-12 col-lg-6 mx-auto p-4 my-4 bg-warning rounded shadow">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group text-center mb-4">
                        <h2 className="fw-bold">Free Refund Estimate</h2>
                        <p className="mb-0">Simply fill out the form and we’ll be in touch shortly.</p>
                        </div>

                        <div className="row g-3">
                        <div className="col-md-6">
                            <input
                            onChange={handleChange}
                            value={firstName}
                            placeholder="First Name"
                            name="firstName"
                            id="first-name"
                            type="text"
                            autoComplete="off"
                            className="form-control"
                            required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                            onChange={handleChange}
                            value={lastName}
                            placeholder="Last Name"
                            name="lastName"
                            id="last-name"
                            type="text"
                            autoComplete="off"
                            className="form-control"
                            required
                            />
                        </div>

                        <div className="col-12">
                            <input
                            onChange={handleChange}
                            value={email}
                            placeholder="Email"
                            name="email"
                            id="email"
                            type="email"
                            autoComplete="off"
                            className="form-control"
                            required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                            onChange={handleChange}
                            value={dob}
                            placeholder="Date of Birth (DD/MM/YYYY)"
                            name="dob"
                            id="dob"
                            type="text"
                            autoComplete="off"
                            className="form-control"
                            required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                            onChange={handleChange}
                            value={phone}
                            placeholder="Mobile"
                            name="phone"
                            id="phone"
                            type="tel"
                            autoComplete="off"
                            className="form-control"
                            required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                            onChange={handleChange}
                            value={tfn}
                            placeholder="Tax File Number"
                            name="tfn"
                            id="tfn"
                            type="text"
                            autoComplete="off"
                            className="form-control"
                            required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                            onChange={handleChange}
                            value={referral}
                            placeholder="Referral Code (Optional)"
                            name="referral"
                            id="referral"
                            type="text"
                            className="form-control"
                            />
                        </div>

                        <div className="col-12 form-check mt-3">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="consent"
                            name="consent"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            required
                            />
                            <label className="form-check-label" htmlFor="consent">
                            I provide <Link to="/consent" className="text-dark text-decoration-underline">consent</Link> and authorize OnlineTaxRefundToday to add me as a client.
                            </label>
                        </div>

                        <div className="col-12 form-check">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="processConsent"
                            name="processConsent"
                            checked={processConsent}
                            onChange={(e) => setProcessConsent(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="processConsent">
                            I would like to proceed with my tax return.
                            </label>
                        </div>

                        {processConsent && (
                            <>
                            <div className="col-md-6">
                                <input
                                onChange={handleChange}
                                value={bsb}
                                placeholder="Your BSB number"
                                name="bsb"
                                id="bsb"
                                type="text"
                                className="form-control"
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                onChange={handleChange}
                                value={acc}
                                placeholder="Your bank account number"
                                name="acc"
                                id="acc"
                                type="text"
                                className="form-control"
                                />
                            </div>
                            <div className="col-12 small text-muted">
                                Provide your bank details to improve processing time.
                            </div>
                            </>
                        )}

                        <div className="col-12 text-center mt-3">
                            <button type="submit" className="btn btn-primary w-50">
                            Submit
                            </button>
                        </div>

                        {response && (
                            <div className="col-12 mt-3 alert alert-info text-center">
                            {response}
                            </div>
                        )}

                        {error && (
                            <div className="col-12 mt-3 alert alert-danger text-center">
                            {errorMessage}
                            </div>
                        )}
                        </div>
                    </form>
                    </div>
    );
};
export default ContactForm;