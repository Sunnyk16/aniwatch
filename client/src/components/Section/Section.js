import React from "react";
import CardSec from "../CardSec/CardSec";

function Section() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                  className="card-img-top"
                  alt="Skyscrapers"
                />
                <div className="card-body">
                  <h5 className="card-title">Die Hard</h5>
                  <p className="card-text">
                    Die Hard is a classic action movie featuring Bruce Willis as
                    John McClane, an NYPD officer who takes on a group of
                    terrorists led by Hans Gruber (played by Alan Rickman) in a
                    Los Angeles skyscraper.
                  </p>
                </div>
                {/* <div className="card-footer">
                  <small className="text-muted">Release Date: July 15, 1988</small>
                </div> */}
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                  className="card-img-top"
                  alt="Los Angeles Skyscrapers"
                />
                <div className="card-body">
                  <h5 className="card-title">Mad Max: Fury Road</h5>
                  <p className="card-text">
                    Mad Max: Fury Road is an adrenaline-fueled action movie set
                    in a post-apocalyptic wasteland. It follows Max Rockatansky
                    (played by Tom Hardy) and Imperator Furiosa (played by
                    Charlize Theron) as they escape from a tyrannical warlord.
                  </p>
                </div>
                {/* <div className="card-footer">
                  <small className="text-muted">Release Date: May 15, 2015</small>
                </div> */}
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                  className="card-img-top"
                  alt="Palm Springs Road"
                />
                <div className="card-body">
                  <h5 className="card-title">The Dark Knight</h5>
                  <p className="card-text">
                    The Dark Knight is a superhero action movie directed by
                    Christopher Nolan and starring Christian Bale as Batman. It
                    features Batman's struggle against the Joker (played by
                    Heath Ledger) in Gotham City.
                  </p>
                </div>
                {/* <div className="card-footer">
                  <small className="text-muted">Release Date: July 18, 2008</small>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="card-img-top"
                  alt="City Lights"
                />
                <div className="card-body">
                  <h5 className="card-title">John Wick</h5>
                  <p className="card-text">
                    John Wick is an action-packed movie series starring Keanu
                    Reeves as the titular character, a retired hitman seeking
                    vengeance for the killing of his beloved dog.
                  </p>
                </div>
                {/* <div className="card-footer">
                  <small className="text-muted">Release Date: October 24, 2014</small>
                </div> */}
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/040.webp"
                  className="card-img-top"
                  alt="New York City"
                />
                <div className="card-body">
                  <h5 className="card-title">The Matrix</h5>
                  <p className="card-text">
                    The Matrix is a groundbreaking action movie directed by the
                    Wachowskis and starring Keanu Reeves as Neo, a computer
                    hacker who discovers the truth about reality and battles
                    against intelligent machines.
                  </p>
                </div>
                {/* <div className="card-footer">
                  <small className="text-muted">Release Date: March 31, 1999</small>
                </div> */}
              </div>
            </div>

            {/* <CardSec movie={{ _id: 1, img: "image-url", title: "Movie Title", content: "Movie Description" }} /> */}

            <div className="col">
              <CardSec
                movie={{
                  _id: 1,
                  img: "image-url",
                  title: "Movie Titleaaasas",
                  content: "Movie Description",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Section;
