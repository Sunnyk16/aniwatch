import React, { useEffect, useState } from 'react';
import CardSec from '../CardSec/CardSec';
import axios from 'axios';
import '../Section/Section.css';

function Section({ genre }) {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/moviedata');
      const filteredMovies = response.data.data.filter(movie => movie.gener === genre);
      setMovies(filteredMovies);
      console.log(`${genre} movies:`, filteredMovies);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    loadMovies();
  }, [genre]);

  return (
    <div className='px-1 mb-5 m-1'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {movies.length > 0 && movies.map((movie, index) => {
            if (index % 4 === 0) {
              const chunk = movies.slice(index, index + 4);
              return (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="row row-cols-1 row-cols-md-4 g-4">
                    {chunk.map((movie, subIndex) => (
                      <div className="col" key={subIndex}>
                        <CardSec movie={movie} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Section;
