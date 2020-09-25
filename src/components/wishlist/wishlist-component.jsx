import React, { useContext, useState, useEffect, Fragment } from 'react';
import { Store } from '../../store';
import WishlistItem from '../wishlist-item/wishlist-item-component.jsx';
import './wishlist.scss';

const Wishlist = () => {
  const { state, dispatch } = useContext(Store);
  const [ data, setData ] = useState();
  useEffect(() => {
    const allMovieData = state.data.map((cat) => cat.data).flat();
    const wishlistData = allMovieData.filter((item) => state.wishlist.includes(item.id));
    setData(wishlistData);
  },[state.wishlist]);
  return (
    <section className="wishlist">
      {data ? (
        <Fragment>
          <h1 className="wishlist__title">Wishlist</h1>
          { data.map((item, index) => {
            return (
              <WishlistItem data={item} key={index}/>
            )
          })}
        </Fragment>
      ) : (
        <div>Loading</div>
      )}
    </section>
  )
}

export default Wishlist;
