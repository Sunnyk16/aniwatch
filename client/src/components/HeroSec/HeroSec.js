import React from 'react';
import backgroundImage from './img12.jpg'; // Import the image

function HeroSec() {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-1 mt-3" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' ,width:'100%'}}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold  lh-1 mb-3 text-white ">Bumblbee</h1>
            <p className="text-white">"Bumblebee" is a 2018 prequel to the "Transformers" series. Set in 1987, it follows teenager Charlie and her friendship with Bumblebee, evading Decepticons while unraveling his purpose on Earth..</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-sm px-4 me-md-2">Watch Now</button>
              
              
            </div>
          </div>
          
          {/* .... */}
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
