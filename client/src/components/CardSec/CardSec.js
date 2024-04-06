import React from "react";

function CardSec() {
    const {_id,img,title,content}=movie
  return (
    <div>
      <div className="card h-100" >
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
          className="card-img-top"
          alt="City Lights"
        />
        <div className="card-body">
          <h5 className="card-title">John Wick</h5>
          <p className="card-text">
            John Wick is an action-packed movie series starring Keanu Reeves as
            the titular character, a retired hitman seeking vengeance for the
            killing of his beloved dog.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardSec;
