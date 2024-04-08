import React from "react";
import "./CardSec.css"; 

function CardSec({ movie }) {
  const { _id, img, title, content } = movie;
  return (
    <div className="card custom-card w-100 h-auto  cardh  ">
      <img src={img} className="card-img-top " alt={title} />
      <div className="card-body">
        <h5 className="card-title fw-bolder fs-3">{title}</h5>
        <p className="card-text">{content.substring(0,80)}</p>
        <button className="btn btn-primary btn-sm ">Explore</button>
      </div>
    </div>
  );
}

export default CardSec;
