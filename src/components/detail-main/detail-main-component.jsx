import React, { useContext } from "react";
import { Store } from "../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailMain = ({ data }) => {
  const { state, dispatch } = useContext(Store);
  const savedToWishlist = state.wishlist.includes(data.id);
  const updateWishlist = () => {
    dispatch({
      type: "UPDATE_WISHLIST",
      payload: data.id,
    });
  };
  return (
    <div className="detail__main">
      <img
        src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
        className="detail__image"
      />
      <div className="detail__summary">
        <p>{data.overview}</p>
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
      </div>
    </div>
  );
};

export default DetailMain;
