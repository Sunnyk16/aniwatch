import React from "react";
import backgroundImage from './img11.jpeg'; // Import the image


function HeroSec1() {
  return (
    <div>
      <div className="m-1 mb-3">
        <div
          className="container col-xxl-8 px-4 py-1 mt-3"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold  lh-1 mb-3 text-white ">
              Fast & Furious 4
              </h1>
              <p className="text-white">
              Fast & Furious 4 reunites Dom and Brian in a high-stakes heist while evading a drug lord. Action-packed thrill ride ensues.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-sm px-4 me-md-2"
                >
                  Watch Now
                </button>
              </div>
            </div>

            {/* .... */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSec1;
