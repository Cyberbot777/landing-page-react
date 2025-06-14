import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />

      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <Card
            image="https://via.placeholder.com/500x325"
            title="Card 1"
            text="Some quick example text for card 1."
            buttonLabel="Find Out More!"
          />
          <Card
            image="https://via.placeholder.com/500x325"
            title="Card 2"
            text="Some quick example text for card 2."
            buttonLabel="Find Out More!"
          />
          <Card
            image="https://via.placeholder.com/500x325"
            title="Card 3"
            text="Some quick example text for card 3."
            buttonLabel="Find Out More!"
          />
          <Card
            image="https://via.placeholder.com/500x325"
            title="Card 4"
            text="Some quick example text for card 4."
            buttonLabel="Find Out More!"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
