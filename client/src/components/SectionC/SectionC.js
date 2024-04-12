import React from "react";
import logo1 from "./l1.png";
import logo2 from "./l2.png";
import logo3 from "./l3.png";
import logo4 from "./l4.png";
import logo5 from "./l5.png";
import logo6 from "./l6.png";
import "./SectionC.css"; // Import your CSS file

function SectionC() {
  return (
    <div className="container ">
      <div className="row mx-2 my-3">
        <div className="col-md-2 col-sm-4 col-6">
          <div className="w-100 h-75 p-2 bg-light d-flex flex-row justify-content-center rounded-1 c ">
            <img src={logo1} className="img-fluid" alt="Logo 1" />
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-6">
          <div className="w-100 h-75 p-2 bg-light d-flex flex-row justify-content-center rounded-1 c">
            <img src={logo2} className="img-fluid" alt="Logo 2" />
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-6">
          <div className="w-100 p-2 h-75 bg-light d-flex flex-row justify-content-center rounded-1 c">
            <img src={logo3} className="img-fluid" alt="Logo 3" />
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-6">
          <div className="w-100 p-2 h-75 bg-light d-flex flex-row justify-content-center rounded-1 c">
            <img src={logo4} className="img-fluid" alt="Logo 4" />
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-6">
          <div className="w-100 p-2 h-75 bg-light d-flex flex-row justify-content-center rounded-1 c">
            <img src={logo5} className="img-fluid" alt="Logo 5" />
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-6">
          <div className="w-100 p-2 h-75 bg-light d-flex flex-row justify-content-center rounded-1 c">
            <img src={logo6} className="img-fluid" alt="Logo 6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionC;
