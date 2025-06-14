import React from "react";

const Navbar = () => {
     
    return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">Start Bootstrap</a>
				<div>
					<a href="#" className="nav-link d-inline text-white ms-2">Home</a>
					<a href="#" className="nav-link d-inline text-white ms-2">About</a>
					<a href="#" className="nav-link d-inline text-white ms-2">Services</a>
					<a href="#" className="nav-link d-inline text-white ms-2">Contact</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

