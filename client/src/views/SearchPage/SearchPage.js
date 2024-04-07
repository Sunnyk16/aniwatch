
import React from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const handleSearch = () => {
    
    console.log("Search button clicked");
  };

  
  const movies = [
    { title: "Movie 1", genre: "Horror", year: "2022", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 2", genre: "Horror", year: "2022", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 3", genre: "Action", year: "2019", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 4", genre: "Romance", year: "2020", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 5", genre: "Romance", year: "2020", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 6", genre: "Comedy", year: "2021", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 8", genre: "Horror", year: "2021", imageUrl: "https://via.placeholder.com/150" }
   
  ];

  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      <div className="genres">
        <div className="genre">Horror</div>
        <div className="genre">Action</div>
        <div className="genre">Romance</div>
        <div className="genre">Comedy</div>
      </div>
      <div className="movie-cards">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
