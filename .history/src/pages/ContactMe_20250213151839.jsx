const ContactMe = () => {
    return (
            
                        <div className="container-xl bg-light">
                            <div className="row py-5 align-content-center justify-content-between">
                                <div className="col-md-6 pt-5">
                                    <h1 className="text-center fw-bold">Contact Info</h1>
                                    <ul className="list-group list-group-flush lead">
                                        <li className="list-group-item py-3">
                                            <span className="fw-bold">Main Location:</span> 134 Hill Rd Runcorn QLD {/* spell-checker: disable-line */}
                                        </li>
                                        <li className="list-group-item py-3">
                                            <span className="fw-bold">Mobile phone:</span> 0435 488 983
                                        </li>
                                        <li className="list-group-item py-3">
                                            <span className="fw-bold">Email:</span> excellentaccountant@outlook.com
                                        </li>
                                    </ul>                    
                                </div>
                                <div className="col-md-6 pt-5 text-sm-center">
                                    <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14144.04927383373!2d153.07363325!3d-27.5931477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9144eeeb9cf30d%3A0x32bc78b53e408ec3!2s134%20Hill%20Rd%2C%20Runcorn%20QLD%204113!5e0!3m2!1sko!2sau!4v1720014688921!5m2!1sko!2sau" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                                </div>
                            </div>
                        </div>
            
        
    );
}
export default ContactMe;
