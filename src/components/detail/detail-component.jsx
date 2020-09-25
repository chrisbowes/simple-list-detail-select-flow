import React, { useContext, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { tmdbReq } from "../../services/tmdb-api";
import Tags from "../detail-tags/detail-tags-component.jsx";
import ListStats from "../detail-list-stats/detail-list-stats-component.jsx";
import DetailMain from "../detail-main/detail-main-component.jsx";
import { Store } from '../../store';
import "./detail.scss";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const {state} = useContext(Store);
  const primaryCategory = () => {
    const allMovieData = state.data.map((cat) => cat.data).flat();
    const mapToStateItem = allMovieData.find((item) => item.id === parseInt(id));
    return mapToStateItem ? mapToStateItem.primary_cat : 'default';
  }
  useEffect(() => {
    const getData = async () => {
      const data = await tmdbReq(`movie/${id}`);
      if (data) {
        setData(data);
      }
    };
    getData();
  }, []);

  const listStatValues = [
    { field: "release_date", label: "Release date" },
    { field: "runtime", label: "Run time" },
    { field: "vote_average", label: "Rating"}
  ];

  const stats = listStatValues.map((stat) => { return { label: stat.label, value: data ? data[stat.field] : '' };})

  return (
    <section className={`detail detail--${primaryCategory()}`}>
      {data ? (
        <Fragment>
          <h1 className="detail__title">{data.title}</h1>
          <DetailMain data={data} />
          <div>
            {data.genres.length && <Tags tags={data.genres}/>}
            <ListStats stats={stats} />
          </div>
        </Fragment>
      ) : (
        <div>Loading</div>
      )}
    </section>
  );
};

export default Detail;
