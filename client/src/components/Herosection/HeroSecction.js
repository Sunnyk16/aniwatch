import React from "react";
import '../Herosection/HeroSecction.css'
import Img1 from './img3.jpg';
import Img2 from './img4.jpg';
import Img3 from './img5.jpg';
import { Link } from 'react-router-dom';

function HeroSecction() {
  return (
    <div className='carousel-size' style={{ width: '100%', overflow: 'hidden' }}>
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img1} className="d-block w-100 carousel-image" alt="Slide 1" />
            <div className="container">
              <div className="carousel-caption text-start text-whie ">
                <h1 className="fw-bold display-4 display-lg-1">Avenger Endgame.</h1>
                <p className="opacity-75 fs-6 fs-md-5">Avengers: Endgame is the epic conclusion to the Marvel Cinematic Universe's Infinity Saga. The Avengers embark on a mission to undo Thanos' snap, leading to a climactic battle and emotional farewells.</p>
                <p><Link className="btn btn-sm btn-primary" to="/">Explore</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img2} className="d-block w-100 carousel-image" alt="Slide 2" />
            <div className="container">
              <div className="carousel-caption text-white ">
                <h1 className="fw-bold display-4 display-lg-1">iron man </h1>
                <p className="fs-6 fs-md-5">Iron Man is the inaugural film in the Marvel Cinematic Universe, starring Robert Downey Jr. as Tony Stark. It chronicles his transformation into the armored superhero and his battle against a formidable adversary.</p>
                <p><Link className="btn btn-sm btn-primary" to="/">Explore</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img3} className="d-block w-100 carousel-image" alt="Slide 3" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1 className="fw-bold display-4 display-lg-1">Black Panther</h1>
                <p className="fs-6 fs-md-5">Black Panther is a groundbreaking Marvel film, featuring Chadwick Boseman as T'Challa, the titular hero and king of Wakanda. It explores themes of identity, power, and responsibility amidst political intrigue and stunning action.</p>
                <p><Link className="btn btn-sm btn-primary" to="/">Explore</Link></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HeroSecction;
