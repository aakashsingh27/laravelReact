import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default function HelloReact() {
    return (
        <div className="container-fluid bg-primary text-white text-center py-5">
            <div className="container">
                <h1 className="display-4 fw-bold">Welcome to Laravel + React</h1>
                <p className="lead mt-3">
                    Build modern, dynamic, and powerful applications using Laravel as your backend and React as your frontend.
                </p>
                <div className="mt-4">
                    <a href="/about" className="btn btn-light btn-lg fw-bold px-4 shadow">
                        Learn More
                    </a>
                    <Link to="/contact" className="btn btn-outline-light btn-lg fw-bold px-4 ms-3 shadow">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('hello-react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
}
