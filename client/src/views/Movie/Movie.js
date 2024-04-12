import React, { useEffect, useState } from "react";
import "./Movie.css";
import Navabar from "../../components/Navabar/Navbar";
import Footer from "../../components/Footer/Footer";
import img from "./th.png";
import { useParams } from "react-router-dom";
import axios from "axios";

function Movie() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadMovie = async () => {
      if (!id) return;
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/moviedata/${id}`
        );
        setTitle(response.data.data.title);
        setImgUrl(response.data.data.img);
        setContent(response.data.data.content);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    loadMovie();
  }, [id]);

  return (
    <div>
      {/* <Navabar /> */}
      <div className="main row ">
        <div className=" col-md-4 col-sm-6  p-3">
          <div className="text-capitalize fw-bolder text-center  ">
            <h1>{title} </h1>
          </div>
          <div className="image-container">
            <img src={imgUrl} />
          </div>
        </div>
        <div className="col-md-8 col-sm-6 " >
          <div className="row">
          <div className="box  col-md-1  gap-sm-2  ">
            <div className="">
              <div className="card" style={{ backgroundColor: "#2C2B31" }}>
                <div className="button-group mx-auto mt-3 ">
                  <button>Thriller/Mystery</button>
                  <button>Action</button>
                  <button>Advanture</button>
                  <button>Fantasy</button>
                </div>

                <div className="mx-auto">
                  <div className="button-link">
                    <span>
                      <img
                        src="https://s.yimg.com/fz/api/res/1.2/XB0O5I9RmAFryIG9tHZTmA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/71e55e11-6a5f-3d09-ac34-5d62f0d53562/t_500x300"
                        // src={img}
                        alt=""
                      />
                      76/10
                    </span>
                    <span>
                      <img
                        src="https://tse3.mm.bing.net/th?id=OIP.kQvJLXzMlEQgeciDm_lxTgHaHa&pid=Api&P=0&h=180"
                        alt=""
                      />
                      13(18+)
                    </span>

                    <span>
                      <img src={imgUrl} alt="" />
                      3h 12m
                    </span>
                  </div>
                </div>
                <div className="mx-4">
                  <p>{content}</p>
                </div>

                <div className="d-flex align-items-start ms-4 ">
                  <a href="" className="text-decoration-none ">
                    READ MORE
                  </a>
                </div>

                <div className="group">
                  <div>
                    <button>WATCH TRAILER</button>
                  </div>
                  <div>
                    <img
                      className="paly-button"
                      src="https://tse1.mm.bing.net/th?id=OIP.0Gy1XXE80i8-jYD5EBlNgAHaHZ&pid=Api&P=0&h=180"
                      alt=""
                    />
                  </div>

                  <div>
                    <button>TO WATCHLIST +</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col  my-1 mx-sm-auto">
            <div className="w-100">
              <div>
                <h4>Director</h4>
                <p>James Cameron</p>
              </div>
              <div>
                <h4>Writers</h4>
                <p>Rick Jaffa + Rick Jaffa</p>
                <p>Amanda Sliver</p>
              </div>
              <div>
                <h4>Stars</h4>
                <p>Zoe Saldana * Rick Jaffa </p>
                <p>Sigourney weaver</p>
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

export default Movie;
