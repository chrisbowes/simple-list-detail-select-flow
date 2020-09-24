import React from "react";
import { tmdbReq } from '../services/tmdb-api';

export const Store = React.createContext();

const initialState = {
  wishlist: [],
  data: [],
  appLoading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  React.useEffect(() => {
    const getData = async () => {
      const adventureData = await tmdbReq('discover/movie', '&with_genres=12&include_adult=false');
      const animationData = await tmdbReq('discover/movie', '&with_genres=16&include_adult=false');
      const comedyData = await tmdbReq('discover/movie', '&with_genres=35&include_adult=false');
      if (adventureData && animationData && comedyData) {
        const sortedRes = [
          {
            title: 'Adventure',
            id: 12,
            data: adventureData.results.filter((item) => !item.genre_ids.includes(16) && !item.genre_ids.includes(35))
          },
          {
            title: 'Animation',
            id: 16,
            data: animationData.results.filter((item) => !item.genre_ids.includes(12) && !item.genre_ids.includes(35))
          },
          {
            title: 'Comedy',
            id: 35,
            data: comedyData.results.filter((item) => !item.genre_ids.includes(12) && !item.genre_ids.includes(16))
          }
        ]
        dispatch({ type: 'UPDATE_DATA', payload: sortedRes });
      }
    }
    getData();
  }, [])
  return <Store.Provider value={value}>{props.children}</Store.Provider>
};

