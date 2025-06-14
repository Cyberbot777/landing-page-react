import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	const cardData = [
		{
			image: "https://via.placeholder.com/500x325",
			title: "Card 1",
			text: "This is the first card's text.",
			buttonLabel: "Find Out More!"
		},
		{
			image: "https://via.placeholder.com/500x325",
			title: "Card 2",
			text: "Card 2 has its own custom content.",
			buttonLabel: "Find Out More!"
		},
		{
			image: "https://via.placeholder.com/500x325",
			title: "Card 3",
			text: "Third card here, still passed by props.",
			buttonLabel: "Find Out More!"
		},
		{
			image: "https://via.placeholder.com/500x325",
			title: "Card 4",
			text: "Fourth card to round it out.",
			buttonLabel: "Find Out More!"
		}

		
	];

	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container my-5">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
					{cardData.map((card, index) => (
						<Card
							key={index}
							image={card.image}
							title={card.title}
							text={card.text}
							buttonLabel={card.buttonLabel}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
