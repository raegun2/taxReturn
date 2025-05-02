import { Link } from "react-router-dom";
import React, { useState } from 'react';


function ContactForm() {

    const [response, setResponse] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "firstName") setFirstName(value);
      if (name === "lastName") setLastName(value);
      if (name === "phone") setPhone(value);
    };
  const sendSms = async (e) => {
    e.preventDefault();

    const url = 'https://cellcast.com.au/api/v3/send-sms';

    const headers = {
      'APPKEY': 'CELLCAST8d65428cb79d21d8052788450907ffe3',  // replace with your actual App Key
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    const message = [
      {
        sms_text: `Hi ${firstName} Test one message`,
        numbers: `+61435488983`,
    
      },
    ];

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(message),
      });

      const data = await res.json();
      setResponse(data);
      console.log('SMS sent successfully:', data);
    } catch (error) {
      console.error('Error sending SMS:', error);
      setResponse({ status: 400, msg: "Something went wrong, please try again." });
    }
    };


      
    return (
    <div className="col-10 col-lg-4 p-4 my-3 bg-warning rounded">
        <form method="POST" id="contact-form" onSubmit={sendSms}>
            <div className=" form-group row justify-content-center px-4">                             
                    <div className="text-center">
                        <h2>Free Refund</h2>
                        <h2>Estimate</h2>
                        <p>Simply fill out the form and we’ll be in touch.</p>
                    </div>
                    <div className="">
                        <input onChange={handleChange} placeholder="First Name" name="firstName" id="first-name"type="text" autoComplete="off" autoFocus className="form-control" required/>
                    </div>
                    
                    <div className="pt-1">
                        <input onChange={handleChange} placeholder="Last Name" name="lastName" id="last-name" type="text" autoComplete="off" className="form-control" required/>
                    </div>
                    
                    <div className=" pt-1">
                        <input placeholder="Email" name="email" id="email" type="email" autoComplete="off" className="form-control" required/>
                    </div>
                    
                    <div className=" pt-1">
                        <input placeholder="Date of Birth (DD/MM/YYYY)" name="dob" id="dob" type="text"  autoComplete="off" className="form-control" required/>
                    </div>
                    
                    <div className=" pt-1">
                        <input onChange={handleChange} placeholder="Tax File No." pattern="\d{9}" name="tfn" id="tfn" type="text" autoComplete="off" className="form-control" required />
                    </div>
                    
                    <div className=" pt-1">
                        <input onChange={handleChange} placeholder="Mobile" name="phone" id="phone" type="tel" autoComplete="off" className="form-control" required />
                    </div>
                    
                    <div className=" pt-1">
                        <input placeholder="Referral Code (Optional)" name="referral" id="referral" type="digit" className="form-control"/>
                    </div>

                    <div className=" pt-1 align-items-between">
                        <div className="">
                            <input type="checkbox" name="consent" id="consent" className="" defaultChecked={true} required />    
                            <span className="padding-10"> I provide <Link to="/consent" className="text-dark text-decoration-underline">consent</Link> and authorize Same Day Tax refund (ABN 0000000000 and Tax Agent 000000000) to add me as a client in the Tax Agent Portal.</span>
                        </div>
                    </div>
                    <div className="w-50 text-center pt-1">
                        <input className="btn btn-primary w-75 " id="button"value="Submit" type="submit" />
                    </div>
                    {response && (
                        <div style={{ marginTop: '20px' }}>
                            <h2>Response:</h2>
                            <pre>{JSON.stringify(response, null, 2)}</pre>
                        </div>
                    )}
                        
            </div>             
        </form>
    </div>
    );
};
export default ContactForm;