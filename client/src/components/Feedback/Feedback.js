import React, { useState } from "react";
import "./Feedback.css";
import imgStar from "./blank-star.png";
import yellowImg from "./yellow-star.png";
import axios from "axios";
import toast from "react-hot-toast";
import Reviews from "../../views/Reviews/Reviews";
import Navabar from "../../components/Navabar/Navbar";
import Footer from "../../components/Footer/Footer";

function Feedback() {
  const [name, setName] = useState("");
  const [e_mail, setE_mail] = useState("");
  const [experience, setExperience] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const addReview = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/reviews`,
      {
        name: name,
        e_mail: e_mail,
        experience: experience,
        suggestion: suggestion,
      }
    );

    toast.success(response.data.message);
    window.location.href = "/review";
  };

  return (
    <div className="feedback-page">
      <Navabar />
      <div className="feedback-container">
        <h1 className="feed-header">Share Your Feedback</h1>

        <form className="feedback-form">
          <div className="customer-info">
            <div className="customer-name-info">
              <label for="inputFullName" className="customer-name">
                Customer Name
              </label>{" "}
              <br />
              <input
                type="text"
                id="inputFullName"
                required
                className="customer-name-input"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="customer-email-info">
              <label for="inputEMail" className="customer-email">
                E-mail Address
              </label>{" "}
              <br />
              <input
                type="email"
                id="inputEmail"
                required
                className="customer-email-input"
                value={e_mail}
                onChange={(e) => {
                  setE_mail(e.target.value);
                }}
              />
            </div>
          </div>

          <p className="experinece">
            Please rate your overall doing experience{" "}
          </p>

          <select
            value={experience}
            onChange={(e) => {
              setExperience(e.target.value);
            }}
            className="input-experience"
          >
            <option value="Experience">Experience</option>
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
            <option value="normal">Normal</option>
            <option value="Average">Average</option>
          </select>

          <h1 className="rating">Rate Us</h1>
          <div className="start-img-container">
            <img src={imgStar} alt="star" className="img-star" />
            <img src={imgStar} alt="star" className="img-star" />
            <img src={imgStar} alt="star" className="img-star" />
            <img src={imgStar} alt="star" className="img-star" />
            <img src={imgStar} alt="star" className="img-star" />
          </div>

          <h2 className="tittle">
            Do you have any suggestion to improve our website
          </h2>
          <input
            type="text"
            placeholder="write your suggestion"
            className="suggestion-input"
            value={suggestion}
            onChange={(e) => {
              setSuggestion(e.target.value);
            }}
          />

          <button type="botton" className="Feedback-btn" onClick={addReview}>
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Feedback;
