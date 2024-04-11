import React from "react";
import Navbar from "../../components/Navabar/Navbar";
import Img1 from "./img-1.jpg";
import background from "./img12.jpeg";
import "./Aboutus.css";
import Footer from "../../components/Footer/Footer";

function Aboutus() {
  return (
    <div className="bg-dark">
      <Navbar />
      <div className="container ">
        <div className="row  w-100 card1"style={{backgroundImage: `url(${background})`}}>
          <div className=" col ">
            <h1 className=" fw-bold fs-f  text-primary mb-3 text-center m-5">About Us</h1>
            <p className="  fw-bold  text-light  fs-t">
            At our core, we're dedicated to bridging the gap between imagination and reality, crafting immersive narratives that transport audiences into captivating worlds of film and storytelling.
            </p>
          </div>
          
        </div>
        <div className="our-mission mb-5">
          <h1 className="heading">Our Mission</h1>
          <p className="fs-4 text-light">
            Our Mission is to provide all your favorite Movies, Dramas, and all
            other content to you with the best quality. We also give the
            assurance of providing newly released shows for you as soon as they
            are released.
          </p>
        </div>
        {/* <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="imgslider"></div>
          </div>
        </div> */}

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h1 className="display-5 fw-bold text-primary mb-2 mt-4">
                Our Team
              </h1>
              <p className="fs-4 mb-1 text-center text-light">
                With Our Team, you can expect personalized attention and
                engaging designs.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark" />
            </div>
          </div>

          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img
                  src={Img1}
                  className="card-img-top p-4"
                  alt="Flora Nyra"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flora Nyra</h5>
                  <p className="card-text mb-3 mt-4">
                    Define the product vision and strategy and conduct user
                    research to understand the needs of the target market.
                  </p>
                </div>
              </div>
            </div>

            {/* Add more team members similarly */}
            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img
                  src={Img1}
                  className="card-img-top p-4"
                  alt="Flora Nyra"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flora Nyra</h5>
                  <p className="card-text mb-3 mt-4">
                    Define the product vision and strategy and conduct user
                    research to understand the needs of the target market.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img
                  src={Img1}
                  className="card-img-top p-4"
                  alt="Flora Nyra"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flora Nyra</h5>
                  <p className="card-text mb-3 mt-4">
                    Define the product vision and strategy and conduct user
                    research to understand the needs of the target market.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img
                  src={Img1}
                  className="card-img-top p-4"
                  alt="Flora Nyra"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flora Nyra</h5>
                  <p className="card-text mb-3 mt-4">
                    Define the product vision and strategy and conduct user
                    research to understand the needs of the target market.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img
                  src={Img1}
                  className="card-img-top p-4"
                  alt="Flora Nyra"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flora Nyra</h5>
                  <p className="card-text mb-3 mt-4">
                    Define the product vision and strategy and conduct user
                    research to understand the needs of the target market.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img
                  src={Img1}
                  className="card-img-top p-4"
                  alt="Flora Nyra"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flora Nyra</h5>
                  <p className="card-text mb-3 mt-4">
                    Define the product vision and strategy and conduct user
                    research to understand the needs of the target market.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img
                  src={Img1}
                  className="card-img-top p-4"
                  alt="Flora Nyra"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flora Nyra</h5>
                  <p className="card-text mb-3 mt-4">
                    Define the product vision and strategy and conduct user
                    research to understand the needs of the target market.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img
                  src={Img1}
                  className="card-img-top p-4"
                  alt="Flora Nyra"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flora Nyra</h5>
                  <p className="card-text mb-3 mt-4">
                    Define the product vision and strategy and conduct user
                    research to understand the needs of the target market.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
