import React from 'react';
import { Store } from '../../store';
import Carousel from '../carousel/carousel-component.jsx';

const Home = () => {
  const { state, dispatch } = React.useContext(Store);
  const categories = state.data;
  return (
    <section>
      {categories.map((category, index) => {
        return (
          <Carousel key={index} categoryid={category.id}/>
        )
      })}
    </section>
  )
}

export default Home;
