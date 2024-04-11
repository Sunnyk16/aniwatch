import React from "react";
import Navbar from "../../components/Navabar/Navbar";
import HeroSecction from "../../components/Herosection/HeroSecction";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import HeroSec from "../../components/HeroSec/HeroSec";
import "../Home/Home.css";
import HeroSec1 from "../../components/HeroSec1/HeroSec1";

function Home() {
  return (
    <div>
      <div className="bg-b">
        <div>
          <Navbar />
        </div>
        {/* .. */}

        <div className="">
          <HeroSecction />
        </div>

        <div>
          <div className="m-1">
            <p className="text-capitalize  fw-bolder  text-white fs-24 mx-2 ">
              Action
            </p>
            <Section genre="action" />
          </div>
        </div>

        <div>
          <HeroSec />
        </div>

        <div className="p-1">
          <h1 className="text-capitalize  fw-bolder  text-white fs-24 mx-4 mt-3">Animation</h1>
          <Section genre="animation" />
        </div>
        <div>
          <HeroSec1/>
        </div>
        <div>
        <h1 className="text-capitalize  fw-bolder  text-white fs-24 mx-4 mt-3">Marvel</h1>
        <Section genre="marvel"/>

        </div>
        

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
