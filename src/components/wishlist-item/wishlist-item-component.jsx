import React, { useContext } from "react";
import { Store } from "../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const WishlistItem = ({ data }) => {
  const { state, dispatch } = useContext(Store);
  const history = useHistory();
  const savedToWishlist = state.wishlist.includes(data.id);
  const updateWishlist = () => {
    dispatch({
      type: "UPDATE_WISHLIST",
      payload: data.id,
    });
  };
  const viewDetails = () => history.push(`/detail/${data.id}`);
  return (
    <div className="wishlist__main">
      <img
        src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
        className="wishlist__image"
      />
      <div className="wishlist__summary">
        <h2>{data.title}</h2>
        <p>{data.overview}</p>
        <div className="wishlist__btn-wrapper">
          <button
            className="btn btn__wishlist"
            disable={state.wishlist.includes(data.id).toString()}
            onClick={updateWishlist}
          >
            {savedToWishlist ? (
              <>
                <FontAwesomeIcon icon="times" />
                <span className="btn__inner-label">Remove from wishlist</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon="heart" />
                <span className="btn__inner-label">Add to wishlist</span>
              </>
            )}
          </button>
          <button className="btn btn__wishlist" onClick={viewDetails}>View details &raquo;</button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
