import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Start Bootstrap</a>

                {/* Hamburger Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="ms-auto">
                        <a href="#" className="nav-link d-inline text-white ms-2">Home</a>
                        <a href="#" className="nav-link d-inline text-white ms-2">About</a>
                        <a href="#" className="nav-link d-inline text-white ms-2">Services</a>
                        <a href="#" className="nav-link d-inline text-white ms-2">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
