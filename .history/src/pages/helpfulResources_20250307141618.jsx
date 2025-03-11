import ContactForm from "./TaxContactForm";
import React, {useEffect, useState} from "react";
import axios from 'axios';

const API_URL = "https://api.anz/cds-au/v1"

export default function helpfulResources() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = usestate(null);
    
    useEffect(() => {
        axios.get(API_URL)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });

    },[]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    
    return (
    
                    <section className="helpfulResources">
                        <div className="container bg-light h-100 w-100">
                            <div className="row d-flex align-items-center justify-content-evenly flex-row-reverse">
                            <ContactForm /> 
                                <div className="col-lg-6 pt-5 order-lg-1">
                                    <h2>Fetched Data</h2>
                                    <ul>
                                        {data.slice(0, 5).map((item) => (
                                        <li key={item.id}>
                                            <strong>{item.title}</strong>
                                            <p>{item.body}</p>
                                        </li>
                                        ))}
                                    </ul>
                                    
                                </div>
                                              
                                
                            </div>                       
                        </div>
                    </section>
            
        
    );
};


