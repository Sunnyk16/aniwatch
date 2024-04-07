import React from "react";
import {React ,useState} from 'react'
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
    <div className="signup-container">
      <div className="signup-form-container ">
        <h2 className="heading">Register</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* <label htmlFor='email'>
                        <strong>Name</strong>
                    </label> */}
            <br></br>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className=" input "
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            {/* <label htmlFor='email'>
                        <strong>Email</strong>
                    </label> */}
            <br></br>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            {/* <label htmlFor='email'>
                        <strong>Password</strong>
                    </label> */}
            <br></br>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br></br>

          <button type="submit" className="btn btn-success w-100 rounded-1 p-2">
            Register
          </button>
        </form>

        <p className="text">Already have an Account?</p>

        <Link
          to="/login"
          className="btn  btn-default border w-100 bg-light rounded-1 p-2 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signupform;
