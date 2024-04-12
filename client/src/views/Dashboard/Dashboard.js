import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import "./Dashboard.css"
import {FaCartArrowDown, FaUserAlt, FaSafari, FaTasks, FaCar} from 'react-icons/fa'


    

function Dashboard() {
    const[movies,setMovies]=useState([])

    const loadMovies= async()=>{
        const response= await axios.get(`${process.env.REACT_APP_API_URL}/all-movies`');

        setMovies(response.data.data);
    }
    useEffect(()=>{
        loadMovies();

    }, [])
  return (
    
    

    

    


    
    <div className='d-flex home'>
        {movies.map((movie, index)=>
        
        {const {id , name , genre, duration}=movie;
            return(
            
            <h1>{name}</h1>
            <h1>{id}</h1>
            <h1>{genre}</h1>
            <h1>{duration}</h1>

        )})}
        <div className='d-flex sidebar flex-column flex-shrink-0  bg-dark'>
            <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'> 
                <li className='nav-item '>                    
                    <a href="" className='nav-link text-white active'>
                        <FaSafari/> <span className='ms-2'>Dashboard</span>
                    </a>
                </li>
                <li className='nav-item '>                    
                <Link to={`/search`}className='nav-link text-white'>
                        <FaCartArrowDown/> <span className='ms-2'>Recents</span>
                </Link>
                </li>
                <li className='nav-item '>                    
                <Link to={`/search`} className='nav-link text-white'>
                        <FaUserAlt/> <span className='ms-2'>Favourites</span>
                    </Link>
                </li>
                <li className='nav-item '>                    
                <Link to={`/search`} className='nav-link text-white'>
                        <FaTasks/> <span className='ms-2'>Library</span>
                    </Link>
                </li>
            </ul>

        </div>
        <div className='content container mt-3'>
            <div className='row'>
                <button className='col-md-3 text-white col bg-primary d-flex 
                    justify-content-around px-1 py-3 rounded'>
                    <p>Total Hours</p>
                    <FaCartArrowDown />
                </button>
                <button className='col-md-3 text-white margin-2 col bg-primary d-flex 
                    justify-content-around px-1 py-3 rounded'>
                    <p>Total Movies</p>
                    <FaCartArrowDown />
                </button>
                <button className='col-md-3 text-white col bg-primary d-flex 
                    justify-content-around px-1 py-3 rounded'>
                    <p>Total Added</p>
                    <FaCartArrowDown />
                </button>
                <button className='col-md-3 text-white col bg-primary d-flex 
                    justify-content-around px-1 py-3 rounded '>
                    <p>Report</p>
                    <FaCartArrowDown />
                </button>
            </div>

            <div className="d-flex justify-content-between mt-3">
                <h2>MOVIES</h2>
                <Link to={`/search`} >
                <button className="btn btn-success">+ Add More</button>
                </Link>
            </div>
            <table className="table w-100">
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
                    <tr>
                        <td>1</td>
                        <td>Tarzan The wonder car</td>
                        <td>3 Hr</td>
                        <td>Thrill</td>
                        <td><button className="btn btn-success mx-2">+</button>
                        <button className="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tamasha</td>
                        <td>2 Hr</td>
                        <td>Romance</td>
                        <td><button className="btn btn-success mx-2">+</button>
                        <button className="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Krish 3</td>
                        <td>2.5 Hr</td>
                        <td>Action</td>
                        <td><button className="btn btn-success mx-2">+</button>
                        <button className="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Animal</td>
                        <td>3 Hr</td>
                        <td>Action, Romance</td>
                        <td><button className="btn btn-success mx-2">+</button>
                        <button className="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Anand</td>
                        <td>3 Hr</td>
                        <td>Drama</td>
                        <td><button className="btn btn-success mx-2">+</button>
                        <button className="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Thor Love and Thunder</td>
                        <td>2 Hr</td>
                        <td>Action</td>
                        <td><button className="btn btn-success mx-2">+</button>
                        <button className="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Golmaal</td>
                        <td>2.5 Hr</td>
                        <td>Comedy</td>
                        <td><button className="btn btn-success mx-2">+</button>
                        <button className="btn btn-danger mx-2">-</button> </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
  )
}
  

export default Dashboard