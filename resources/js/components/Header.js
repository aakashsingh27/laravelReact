import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand fw-bold fs-3" to="/">🚀 MyApp</Link>

                {/* Mobile Menu Button */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white fs-5 px-3 nav-hover" to="/">🏠 Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fs-5 px-3 nav-hover" to="/about">ℹ️ About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fs-5 px-3 nav-hover" to="/contact">📞 Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
