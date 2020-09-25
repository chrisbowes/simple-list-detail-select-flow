import React from "react";
import './detail-tags.scss';

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      <h3 className="tags__header">Tagged as</h3>
      {tags.map((tag) => {
        return <span key={tag.id} className="tags__tagname">{tag.name}</span>;
      })}
    </div>
  );
};

export default Tags;
