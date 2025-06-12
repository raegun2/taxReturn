import ContactForm from "../components/TaxContactForm";
import React, { useEffect, useState } from "react";

const API_URL = "https://api.anz/cds-au/v1/banking/products";

const HelpfulResources = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const headers = {
      "Accept": "application/json",
      "x-v": "3",  // Replace with actual version
      "x-min-v": "1" // Replace with actual minimum version
    };

    fetch(API_URL, { method: "GET", headers })
      .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log("API Response:", data); // Log full response for debugging
            setProducts(data.data.products || []); // Ensure correct property path
            setLoading(false);
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      }, []);

  // Log products after state update
  useEffect(() => {
    console.log("Updated Products:", products);
  }, [products]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <section className="helfulResources pt-lg-3 pt-5">
        <div className="container bg-light">
            <div className="row d-flex align-items-center justify-content-evenly flex-row-reverse">
            <ContactForm /> 
                <div className="col-lg-6 pt-5 order-lg-1 bg">
                  
                <h2>Banking Products</h2>
                    <ul className>
                        {products.map((product) => (
                        <li key={product.productId}>
                            <strong>{product.name}</strong> - {product.description}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>                       
        </div>
      </section>
      <section className="instructors">
        <div className="container p-3">
            <div className="row text-center g-2  d-inline-grid">
                <div className="col-lg">
                    <div className="card w-100">
                        <div className="card-body p-4 ">
                            <img src={proJung} alt="Accountant" className="img-fluid  rounded-circle mb-3" style={{height: "11vh"}}></img>
                            <h3>Troy Jung</h3>
                            <p>Director, Senior CPA Accountant</p>
                            <p>Troy is a corporate finance officer with 10 years of experience
                                both in company and individual. He is a registered tax agent with the Tax Practitioners Board (TPB) and a member of CPA Australia.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="card w-100 h-100">
                        <div className="card-body p-4">
                            <img src={proLee} alt="Accountant" className="img-fluid  rounded-circle mb-3" style={{height: "11vh"}}></img>
                            <h3>Raegun Lee</h3>
                            <p>Tax Accountant, IT Engineer</p>
                            <p>Raegun is a public practice Accountant with 6 years of experience in Australia and overseas.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="card w-100 h-100">    
                        <div className="card-body p-4">
                            <img src={proHyunju} alt="Accountant" className="img-fluid rounded-circle mb-3" style={{height: "11vh"}}></img>
                            <h3>Julie Lee</h3>
                            <p>Administrative officer, Tax Accountant</p>
                            <p>Julie is an individual tax ccountant with 5 years of experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>

  );
};

export default HelpfulResources;