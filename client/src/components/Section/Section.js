import React, { useEffect, useState } from 'react';
import CardSec from '../CardSec/CardSec';
import axios from 'axios';

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
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {movies.map((movie) => (
              <div className="col" key={movie._id}>
                <CardSec
                  movie={{
                    img: movie.img,
                    title: movie.title,
                    content: movie.content,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
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
  );
}

export default Section;
