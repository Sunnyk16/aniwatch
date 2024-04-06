import React from 'react';
import backgroundImage from './img1.jpg'; // Import the image

function HeroSec() {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-1 mt-3" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' ,width:'100%'}}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold  lh-1 mb-3 text-white ">Bumblbee</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
