import React from 'react';

function About() {
  return (
    <div className="container my-5 p-4 bg-light rounded shadow-lg">
      <h1 className="text-center text-primary mb-4">About Our Project</h1>
      <p className="lead text-muted">
        Welcome to our Laravel + React integrated project! 🚀
      </p>
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-success">Why Laravel + React?</h3>
          <p>
            Laravel provides a powerful backend framework with robust security, 
            while React enhances the frontend with a smooth and interactive UI.
          </p>
        </div>
        <div className="col-md-6">
          <h3 className="text-info">What We Offer?</h3>
          <ul className="list-group">
            <li className="list-group-item">⚡ Fast API Development with Laravel</li>
            <li className="list-group-item">🎨 Modern UI with React</li>
            <li className="list-group-item">🔒 Secure Authentication</li>
            <li className="list-group-item">📡 Real-time Data Handling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
