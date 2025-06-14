import React from "react";

const Card = ({ image, title, text, buttonLabel }) => {
	return (
		<div className="card h-100">
			<img src={image} className="card-img-top" alt={title} />
			<div className="card-body d-flex flex-column justify-content-between">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
				<a href="#" className="btn btn-primary mt-auto">{buttonLabel}</a>
			</div>
		</div>
	);
};

export default Card;
