import React from "react";

function CardSec({ movie }) { // Destructure movie from props
  const { _id, img, title, content } = movie;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top" alt="City Lights" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSec;
