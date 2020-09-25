import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Store } from "../../store";

import "./header.scss";

const Header = () => {
  const { state } = useContext(Store);
  return (
    <header>
      <div className="header__inner">
        <h1>Movie Recommendations</h1>
        <Link to="/wishlist">
          <span className="wishlist-counter">
            Wishlist:&nbsp;
            <span className="wishlist-counter__total">
              {state.wishlist.length}
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
