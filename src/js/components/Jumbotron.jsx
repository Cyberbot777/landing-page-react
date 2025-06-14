import React from "react";

const Jumbotron = () => {
	return (
		<div className="p-5 mb-4 bg-light rounded-3">
			<div className="container d-flex flex-column align-items-center text-center py-5">
				<h1 className="display-5 fw-bold">A Warm Welcome!</h1>
				<p className="col-md-8 fs-4">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
				</p>
				<button className="btn btn-primary btn-lg mt-3" type="button">
					Call to action!
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
