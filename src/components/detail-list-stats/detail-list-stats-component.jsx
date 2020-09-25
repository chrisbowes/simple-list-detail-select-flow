import React from "react";
import "./detail-list-stats.scss";

const ListStats = ({ stats }) => {
  return (
    <ul className="list-stats">
      {stats.map((stat, index) => {
        return (
          <li key={index} className="list-stats__item">
            <span className="list-stats__label">{stat.label}:&nbsp;</span>
            <span className="list-stats__value">{stat.value}&nbsp;</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ListStats;
