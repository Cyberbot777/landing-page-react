import React from "react";

const Card = ({ image, title, text, buttonLabel }) => {
	return (
		<div className="card h-100 bg-dark text-white border-light">
			<img src={image} className="card-img-top" alt={title} />
			<div className="card-body d-flex flex-column justify-content-between">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
				<a href="#" className="btn btn-outline-light mt-auto">{buttonLabel}</a>
			</div>
		</div>
	);
};

export default Card;
