import React from "react";
import Navbar from "../../components/Navabar/Navbar";
import img1 from "../Home/img1.jpg";
import HeroSecction from "../../components/Herosection/HeroSecction";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div >
      <div className="">
        <Navbar />
        {/* <img src={img1}  className="w-100 h-50"></img> */}
      </div>
      
      <div className="">
        <HeroSecction/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
