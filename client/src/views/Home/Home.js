import React from "react";
import Navbar from "../../components/Navabar/Navbar";
import img1 from "../Home/img1.jpg";
import HeroSecction from "../../components/Herosection/HeroSecction";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import HeroSec from "../../components/HeroSec/HeroSec";

function Home() {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>

      <div className="">
        <HeroSecction />
      </div>

      <div>
        <div>
          <h1 className="text-capitalize mt-3 fw-bolder  m-lg-1 ">action</h1>
          <Section/>
        </div>
      </div>
      <div>
        <HeroSec/>
      </div>

      <div>
          <h1 className="text-capitalize mt-3 fw-bolder  m-lg-1 ">action</h1>
          <Section/>
        </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
