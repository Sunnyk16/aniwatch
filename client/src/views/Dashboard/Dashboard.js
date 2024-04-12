import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./Dashboard.css"
import {FaCartArrowDown, FaUserAlt, FaSafari, FaTasks, FaCar} from 'react-icons/fa'

function App(){
    const[movies,setMovies]=useState([])

    const loadMovies= ()=>{
        const response= axios.get('http://localhoast:5000/all-movies')
        console.log(response);
    }
    useEffect(()=>{
        loadMovies();

    }, [])
}
function Dashboard() {
  return (
    
    <div className='d-flex home'>
        <div className='d-flex sidebar flex-column flex-shrink-0  bg-dark'>
            <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'> 
                <li className='nav-item '>                    
                    <a href="" className='nav-link text-white active'>
                        <FaSafari/> <span className='ms-2'>Dashboard</span>
                    </a>
                </li>
                <li className='nav-item '>                    
                    <a href="" className='nav-link text-white'>
                        <FaCartArrowDown/> <span className='ms-2'>Recents</span>
                    </a>
                </li>
                <li className='nav-item '>                    
                    <a href="" className='nav-link text-white'>
                        <FaUserAlt/> <span className='ms-2'>Favourites</span>
                    </a>
                </li>
                <li className='nav-item '>                    
                    <a href="" className='nav-link text-white'>
                        <FaTasks/> <span className='ms-2'>Library</span>
                    </a>
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
                <button className='col-md-3 text-white col bg-primary d-flex 
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
                <button className="btn btn-success">+ Add More</button>
            </div>
            <table class="table w-100">
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
                        <td><button class="btn btn-success mx-2">+</button>
                        <button class="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tamasha</td>
                        <td>2 Hr</td>
                        <td>Romance</td>
                        <td><button class="btn btn-success mx-2">+</button>
                        <button class="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Krish 3</td>
                        <td>2.5 Hr</td>
                        <td>Action</td>
                        <td><button class="btn btn-success mx-2">+</button>
                        <button class="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Animal</td>
                        <td>3 Hr</td>
                        <td>Action, Romance</td>
                        <td><button class="btn btn-success mx-2">+</button>
                        <button class="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Anand</td>
                        <td>3 Hr</td>
                        <td>Drama</td>
                        <td><button class="btn btn-success mx-2">+</button>
                        <button class="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Thor Love and Thunder</td>
                        <td>2 Hr</td>
                        <td>Action</td>
                        <td><button class="btn btn-success mx-2">+</button>
                        <button class="btn btn-danger mx-2">-</button> </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Golmaal</td>
                        <td>2.5 Hr</td>
                        <td>Comedy</td>
                        <td><button class="btn btn-success mx-2">+</button>
                        <button class="btn btn-danger mx-2">-</button> </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Dashboard