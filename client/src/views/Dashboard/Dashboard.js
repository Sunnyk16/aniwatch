import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import { FaCartArrowDown, FaUserAlt, FaSafari, FaTasks, FaCar } from 'react-icons/fa';
import Navbar from '../../components/Navabar/Navbar';
import Footer from '../../components/Footer/Footer'

function Dashboard() {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/dashboard`);
      setMovies(response.data.data);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    console.log(movies);
  
    
  }, [movies])
  

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
        <Navbar/>
        
        <div className="d-flex home">
      {/* {movies.map((movie,i) => {
        return (
            <div key={movie._id}>
          <p>{movie.name}</p>
          <p>ID: {i+1}</p>
          <p>Genre: {movie.genre}</p>
          <p>Duration: {movie.duration}</p>
        </div>
        )}
      )} */}
      <div className="d-flex sidebar flex-column flex-shrink-0 bg-dark">
        <ul className="nav nav-pills flex-column mb-auto px-0 mt-3">
          <li className="nav-item ">
            <a href="" className="nav-link text-white active">
              <FaSafari /> <span className="ms-2">Dashboard</span>
            </a>
          </li>
          <li className="nav-item ">
            <Link to={`/search`} className="nav-link text-white">
              <FaCartArrowDown /> <span className="ms-2">Recents</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to={`/search`} className="nav-link text-white">
              <FaUserAlt /> <span className="ms-2">Favourites</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to={`/search`} className="nav-link text-white">
              <FaTasks /> <span className="ms-2">Library</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="content container ">
        {/* <div className="row">
          <button className="col-md-3 text-white col bg-primary d-flex justify-content-around px-1 py-3 rounded">
            <p>Total Hours</p>
            <FaCartArrowDown />
          </button>
          <button className="col-md-3 text-white margin-2 col bg-primary d-flex justify-content-around px-1 py-3 rounded">
            <p>Total Movies</p>
            <FaCartArrowDown />
          </button>
          <button className="col-md-3 text-white col bg-primary d-flex justify-content-around px-1 py-3 rounded">
            <p>Total Added</p>
            <FaCartArrowDown />
          </button>
          <button className="col-md-3 text-white col bg-primary d-flex justify-content-around px-1 py-3 rounded ">
            <p>Report</p>
            <FaCartArrowDown />
          </button>
        </div> */}

        <div className="d-flex justify-content-between ">
          <h2>MOVIES</h2>
          <Link to={`/search`}>
            <button className="btn btn-success">+ Add More</button>
          </Link>
        </div>
        <table className="table w-100   ">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Movie</th>
              <th scope="col">Duration</th>
              <th scope="col">Genre</th>
              <th scope="col">Ratings</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.id}>
                <td>{index + 1}</td>
                <td>{movie.name}</td>
                <td>{movie.duration}</td>
                <td>{movie.genre}</td>
                <td>
                  <button className="btn btn-success mx-2">+</button>
                  <button className="btn btn-danger mx-2">-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
  );
}

export default Dashboard;
