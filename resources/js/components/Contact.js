import React, { useState } from "react";
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccessMessage("");

        try {
            const response = await axios.post("/submit-form", formData); // Laravel route ko call karega
            setSuccessMessage(response.data.message);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            <form onSubmit={handleSubmit} className="card p-4 shadow-lg">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your name"
                    />
                    {errors.name && <small className="text-danger">{errors.name[0]}</small>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your email"
                    />
                    {errors.email && <small className="text-danger">{errors.email[0]}</small>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        rows="4"
                        placeholder="Enter your message"
                    ></textarea>
                    {errors.message && <small className="text-danger">{errors.message[0]}</small>}
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
