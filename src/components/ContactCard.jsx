import React from "react";

export const ContactCard = () => {
    return (
        <div className="row justify-content-center w-75 container">
            <div className="col-md-6">
                <div className="card text-center">
                    <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto mt-4 tar" alt="Profile Picture"  />

                        <div className="card-body">
                            <h2 className="card-title">John Doe</h2>
                            <p className="card-text text-muted">Software Engineer</p>

                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <i className="fas fa-envelope"></i> john.doe@example.com
                                </li>
                                <li className="mb-2">
                                    <i className="fas fa-phone"></i> +1 (123) 456-7890
                                </li>
                                <li className="mb-2">
                                    <i className="fas fa-map-marker-alt"></i> New York, USA
                                </li>
                            </ul>

                            <div className="mt-4">
                                <a href="#" className="btn btn-outline-primary btn-sm mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="btn btn-outline-info btn-sm mx-1">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="btn btn-outline-danger btn-sm mx-1">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="btn btn-outline-dark btn-sm mx-1">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#" className="btn btn-outline-primary btn-sm mx-1">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};