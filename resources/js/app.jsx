import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import HelloReact from "./components/HelloReact";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
// import About from "./pages/About";

document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("root");

    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(
            <Router>
                <Header/>
                <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<HelloReact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>
                </div>
            </Router>
        );
    }
});
