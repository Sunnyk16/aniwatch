import React from 'react'
import "./Movie.css"
import Navabar from "../../components/Navabar/Navbar"
import Footer from "../../components/Footer/Footer"
import img from "./th.png"

function Movie() {
  return (
    <div>
        <Navabar/>
        <div className="main">
        <div className="image-container">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.6b2vcJ6oPKcM94l9sBoYHgHaK-&pid=Api&P=0&h=180"
            alt="img"
          />
        </div>

        <div className="box">
          <h1>Avatar: The Way of Water</h1>
          <div className="wrap" >
            <div className="card" style={{backgroundColor:'#2C2B31'}}>
              <div className="button-group">
                <button>Thriller/Mystery</button>
                <button>Action</button>
                <button>Advanture</button>
                <button>Fantasy</button>
              </div>

              <div className="button-link">
                <span>
                  <img
                    src="https://s.yimg.com/fz/api/res/1.2/XB0O5I9RmAFryIG9tHZTmA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/71e55e11-6a5f-3d09-ac34-5d62f0d53562/t_500x300"
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
                  <img src={img} alt="" />
                  3h 12m
                </span>
              </div>

              <p>
                Jake Sully lives with his newfound family formed on the
                extrasolar moon Pandora. Once a familiar treat returns to finish
                wat was previously started. Jake must work with Neytiri and the
                army of the Navi race to protect their home.
              </p>
              <a href="">READ MORE</a>

              <div className="group">
                <button>WATCH TRAILER</button>
                <img
                  className="paly-button"
                  src="https://tse1.mm.bing.net/th?id=OIP.0Gy1XXE80i8-jYD5EBlNgAHaHZ&pid=Api&P=0&h=180"
                  alt=""
                />

                <button>TO WATCHLIST +</button>
              </div>
            </div>

            <div className="right-section">
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
      <Footer/>
    </div>
  )
}

export default Movie