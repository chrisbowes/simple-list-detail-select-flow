import React from "react";
import "./carousel-item.scss";

const CarouselItem = ({ item }) => {
  return (
    <article
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w780${item.backdrop_path}"), radial-gradient(rgba(0,0,0,0.4), #000)`,
      }}
      className="carousel-item"
    >
      <div className="carousel-item__summary">
        <h3>{item.title}</h3>
        <p>{item.overview}</p>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w780${item.poster_path}`}
        className="carousel-item__image"
      />
    </article>
  );
};

export default CarouselItem;
