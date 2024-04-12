import React from "react";
import Navbar from "../../components/Navabar/Navbar";
import Img1 from "./img-1.jpg";
import background from "./img12.jpeg";
import "./Aboutus.css";
import Footer from "../../components/Footer/Footer";
import GitHub from "./github.png";
import Gmail from "./gmail.png";
import TeamRakesh from "./img13.jpeg";
import TeamShreya from "./img15.jpeg";
import TeamSunny from "./img16.jpg";
import TeamSanket from "./img14.jpeg";
import TeamSuchita from "./img17.jpeg";

function Aboutus() {
  return (
    <div className="bg-dark">
      <Navbar />
      <div className="container ">
        <div
          className="row  w-100 card1"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className=" col ">
            <h1 className=" fw-bold fs-f  text-primary mb-3 text-center m-5">
              About Us
            </h1>
            <p className="  fw-bold  text-light  fs-t">
              At our core, we're dedicated to bridging the gap between
              imagination and reality, crafting immersive narratives that
              transport audiences into captivating worlds of film and
              storytelling.
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
              <div className="card border-0 shadow w-100 ">
                <img src={TeamSunny} className="Team-img  rounded-sm  " alt="TeamSunny" />
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold fs-3 text-center mb-4 ">
                    Sunny Kumar
                  </h5>
                  
                  <div className="my-2">
                    <img src={Gmail} className="github "></img>
                    <a
                      href="mailto:Kumarsunny1246@gmail.com"
                      className=" text-decoration-none text-dark "
                    >
                      Kumarsunny1246@gmail.com
                    </a>
                    <br/><br/>  

                    <img src={GitHub} className="github"></img>
                    <a
                      href="https://github.com/Sunnyk16"
                      className=" text-decoration-none text-dark "
                    >
                      https://github.com/Sunnyk16
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Add more team members similarly */}
            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100 h-100">
                <img src={TeamSanket} className="Team-img" alt="TeamSanket" />
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold fs-3 text-center">Sanket Bhure</h5>
                  <br></br>

                  <div>
                    <img src={Gmail} className="github"></img>
                    <a
                      href="mailto:sanketbhure1306@gmail.com "
                      className=" text-decoration-none text-dark "
                    >
                      sanketbhure1306@gmail.com
                    </a>
                    <br></br>
                    <br></br>

                    <img src={GitHub} className="github"></img>
                    <a
                      href="https://github.com/sanketbhure"
                      className=" text-decoration-none text-dark "
                    >
                      https://github.com/sanketbhure
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img src={TeamShreya} className="Team-img " alt="TeamShreya" />
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold fs-3 text-center">Shreya Kar</h5>
                  <br></br>
                  <div>
                    <img src={Gmail} className="github"></img>
                    <a
                      href="shreyakar444@gmail.com"
                      className=" text-decoration-none text-dark "
                    >
                      shreyakar444@gmail.com
                    </a>
                    <br></br>
                    <br></br>

                    <img src={GitHub} className="github"></img>
                    <a
                      href=" https://github.com/shreyaa-kar"
                      className=" text-decoration-none text-dark "
                    >
                      https://github.com/shreyaa-kar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img
                  src={TeamSuchita}
                  className="Team-img "
                  alt="TeamSuchita"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold fs-3 text-center">Suchita Thorat</h5>
                  <br></br>
                  <div>
                    <img src={Gmail} className="github"></img>
                    <a
                      href="mailto:suchitathorat73@gmail.com"
                      className=" text-decoration-none text-dark "
                    >
                      suchitathorat73@gmail.com
                    </a>
                    <br></br>
                    <br></br>

                    <img src={GitHub} className="github"></img>
                    <a
                      href="https://github.com/Suchitathorat"
                      className=" text-decoration-none text-dark "
                    >
                      https://github.com/Suchitathorat
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img src={TeamRakesh} className="Team-img" alt="TeamRakesh" />
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold fs-3 text-center">Rakesh Hatzade</h5>
                  <br></br>
                  <div>
                    <img src={Gmail} className="github"></img>
                    <a
                      href="mailto:hatzaderakesh1@gmail.com"
                      className=" text-decoration-none text-dark "
                    >
                      hatzaderakesh1@gmail.com
                    </a>
                    <br></br>
                    <br></br>

                    <img src={GitHub} className="github"></img>
                    <a
                      href="https://github.com/rakeshhatzade11"
                      className=" text-decoration-none text-dark "
                    >
                      https://github.com/rakeshhatzade11
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img src={Img1} className="card-img-top p-4" alt="Flora Nyra" />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flora Nyra</h5>
                  <div>
                    <img src={Gmail} className="github"></img>
                    <a
                      href="mailto:123@gmail.com"
                      className=" text-decoration-none text-dark "
                    >
                      123@gmail.com
                    </a>
                    <br></br>
                    <br></br>

                    <img src={GitHub} className="github"></img>
                    <a
                      href="  https://github.com "
                      className=" text-decoration-none text-dark "
                    >
                      https://github.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img src={Img1} className="card-img-top p-4" alt="Flora Nyra" />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flora Nyra</h5>
                  <div>
                    <img src={Gmail} className="github"></img>
                    <a
                      href="mailto:123@gmail.com"
                      className=" text-decoration-none text-dark "
                    >
                      123@gmail.com
                    </a>
                    <br></br>
                    <br></br>

                    <img src={GitHub} className="github"></img>
                    <a
                      href="https://github.com"
                      className=" text-decoration-none text-dark "
                    >
                      https://github.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow w-100">
                <img src={Img1} className="card-img-top p-4" alt="Flora Nyra" />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flora Nyra</h5>
                  <div>
                    <img src={Gmail} className="github"></img>
                    <a
                      href="mailto:123@gmail.com"
                      className=" text-decoration-none text-dark "
                    >
                      123@gmail.com
                    </a>
                    <br></br>
                    <br></br>

                    <img src={GitHub} className="github"></img>
                    <a
                      href="https://github.com"
                      className=" text-decoration-none text-dark "
                    >
                      https://github.com
                    </a>
                  </div>
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
