import React from "react";
import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import './SignUp.css'

function Signupform() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (

    <div className="background">
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">

      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-primary mb-3">Hey! Welcome to AniWatch</h1>
        <p class="col-lg-10 fs-4 text-light">Please register if you havn't, to watch your favroite movies,dramas and much more with Aniwatch..</p>
      </div>

      <div class="col-md-10 mx-auto col-lg-5">

      

        <form class="p-4 p-md-5 shadow-lg  rounded-3  " onSubmit={handleSubmit}>

        <h2 className="heading text-primary">Register</h2><br></br>


        <div class="form-floating mb-3">
        <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className=" w-100 p-3 rounded-1 "
              onChange={(e) => setName(e.target.value)}
            />      
          </div>





          <div class="form-floating mb-3">
          <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="w-100 p-3 rounded-1"
              onChange={(e) => setEmail(e.target.value)}
            />         
          </div>



          <div class="form-floating mb-3">
          <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="w-100 p-3 rounded-1"
              onChange={(e) => setPassword(e.target.value)}
            />          
          </div>


          <button type="submit" className="btn btn-success w-100 rounded-1 p-2">
            Register
          </button>
          <hr class="my-4"/>

          <p className="text text-light">Already have an Account?</p>

          <Link
          to="/login"
          className="w-100 btn btn-lg btn-primary">
          Login
        </Link>



          
          
        </form>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Signupform;
