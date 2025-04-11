import { Link } from "react-router-dom";

function ContactForm() {
      
    return (
    <div className="col-6 col-lg-4 p-4 my-3 bg-warning rounded">
        <form method="post" id="contact-form">
            <div className=" form-group row justify-content-center px-4">                             
                    <div className=" text-center ">
                        <h2>Free Refund</h2>
                        <h2>Estimate</h2>
                        <input placeholder="First Name" name="first-name" id="first-name"type="text" autoComplete="off" autoFocus className="form-control" required/>
                    </div>
                    
                    <div className="pt-1">
                        <input placeholder="Last Name" name="last-name" id="last-name" type="text" autoComplete="off" className="form-control" required/>
                    </div>
                    
                    <div className=" pt-1">
                        <input placeholder="Email" name="email" id="email" type="email" autoComplete="off" className="form-control" required/>
                    </div>
                    
                    <div className=" pt-1">
                        <input placeholder="Date of Birth (DD/MM/YYYY)" name="dob" id="dob" type="text"  autoComplete="off" className="form-control" required/>
                    </div>
                    
                    <div className=" pt-1">
                        <input placeholder="Tax File No." pattern="\d{9}" name="tfn" id="tfn" type="text" autoComplete="off" className="form-control" required />
                    </div>
                    
                    <div className=" pt-1">
                        <input placeholder="Phone" name="phone" id="phone" type="tel" autoComplete="off" className="form-control" required />
                    </div>
                    
                    <div className=" pt-1">
                        <input placeholder="Referral Code (Optional)" name="referral" id="referral" type="digit" className="form-control"/>
                    </div>

                    <div className=" pt-1 align-items-between">
                        <div className="">
                            <input type="checkbox" name="consent" id="consent" className="" defaultChecked={true} required />    
                            <span className="padding-10"> I provide <Link to="consent" className="text-light">consent</Link> and authorize My Tax Refund Today (ABN 0000000000 and Tax Agent 000000000) to add me as a client in the Tax Agent Portal.</span>
                        </div>
                    </div>
                    <div className="w-50 text-center pt-1">
                        <input className="btn btn-primary w-75 " id="button"value="Submit" type="submit" />
                    </div>    
            </div>             
        </form>
    </div>
    );
}
export default ContactForm;