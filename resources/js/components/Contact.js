import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage , setsuccessMessage] = useState("");
    const [nameRequired , setNameRequired] = useState("");
    const [EmailRequired , setEmailRequired] = useState("");
    const [MessageRequired , setMessageRequired] = useState("");
    const [contactData ,  setContactData] = useState([]);


    const contactFormdata = async()=>{
      
        const response = await axios.post('contact-form-list');
        // console.log(response.data); 
        setContactData(response.data.data);  
         console.log(contactData);

    }

    const submitForm = async(e)=>{
        e.preventDefault();
        if(name ==""){
            setNameRequired("Please fill the name")
        }
        if(email ==""){
            setEmailRequired("Please fill the email")
        }
        if(message == "")
        {
            setMessageRequired("Please fill the message");
        }

        if(name == "" || email == "" || message == "")
        {
            return false;
        }
        const formData = {
            name: name,
            email: email,
            message: message
        }
        const response = await axios.post('submit-form',formData);
        if(response.data.success){
            // alert('form submitted successully')
            setName("");
            setEmail("");
            setMessage("");

            setsuccessMessage('Form submitted successfully');
            contactFormdata();
            setTimeout(() => {
                setsuccessMessage("");
            }, 3000);
        }
    }

    useEffect(()=>{
        contactFormdata();
    },[]);
   
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            <form onSubmit={submitForm} method="POST" className="card p-4 shadow-lg">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e)=>{setName(e.target.value),setNameRequired('')}}
                        className="form-control"
                        placeholder="Enter your name"
                    />
                    <span className="error" style={{color:'red'}}>{nameRequired} </span>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}

                        onChange={(e)=>{setEmail(e.target.value),setEmailRequired("")}}
                        className="form-control"
                        placeholder="Enter your email"
                    />
                    <span className="error" style={{color:'red'}}>{EmailRequired}</span>

                </div>

                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                        name="message"
                        className="form-control"
                        rows="4"
                        onChange={(e)=>{setMessage(e.target.value),setMessageRequired("")}}
                        placeholder="Enter your message"
                        value={message}
                        />
                     
                    <span className="error" style={{color:'red'}}>{MessageRequired} </span>

                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        <div className="row mt-5">
            <div className="col-md-12">
                <h1>Contact form data</h1>
            </div>
        </div>
            <div className="table table-responsive ">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr><th>Sno</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
        {contactData.map((item,key)=>{
            return(
                <tr key={Math.random()}> <td>{key + 1}</td>
                 <td>{item.created_at}</td>
                 <td>{item.name}</td>
                 <td>{item.email}</td>
                 <td>{item.message}</td>
                    </tr>
                

            )
        })}
                  </tbody>
                </table>
            </div>
        </div>
    );
}

export default Contact;
