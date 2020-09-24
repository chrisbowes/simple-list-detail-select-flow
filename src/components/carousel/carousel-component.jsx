import React, { Fragment } from "react";
import { Store } from "../../store";
import "./carousel.scss";
import CarouselItem from "../carousel-item/carousel-item-component.jsx";

const Carousel = ({ categoryid }) => {
  const { state } = React.useContext(Store);
  const cat = state.data.find((cat) => cat.id === categoryid);
  return (
    <Fragment>
      {cat && (
        <section className="category">
          <h2>{cat.title}</h2>
          <div className="carousel">
            {cat.data.map((item, index) => {
              return (
                <CarouselItem key={index} item={item} />
              );
            })}
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Carousel;
