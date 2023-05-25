import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDescription from './MovieDescription';
import MovieForm from './MovieForm';
import './styles.css';
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Carter : la critique du film Netflix (2022)',
      description: 'Carter de Jeong Byeong-gil est une tuerie d’action visuelle hyper violente, dépourvue de bon sens et d’intérêt narratif. Un programme Netflix.',
      posterURL: 'https://cinedweller.com/wp-content/uploads/2022/08/carter-affiche-netflix.jpg',
      rating: 8.5
    },
    {
      title: 'The Swimmers',
      description: 'As the teaser continues, we see their origin story — they celebrate with loved ones and spend time with family members, ',
      posterURL: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQQEN5XRG_4E_1d0mRfMWIsvn2ULCjPt1-O-YdDy7KeYYVqi-N8GQXQaufNO92xZTFuWc1t8w2fLxD0gShAtK8sBRuvIHy9yaNIv5JMVulvV98BUCxZFh1iTpY5BQKoR1weiQorp6ZKYlU3tNjgAPBusy.jpg?r=78d',
      rating: 7.9
    },
    
  ]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleFilter = ({ title, rating }) => {
   
    const filteredMovies = movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const ratingMatch = movie.rating >= parseInt(rating);

      return titleMatch && ratingMatch;
    });

    setMovies(filteredMovies);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home movies={movies} handleFilter={handleFilter} handleAddMovie={handleAddMovie} />} />
          <Route path="/movies/:title" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = ({ movies, handleFilter, handleAddMovie }) => {
  return (
    <>
      <h1>My Favorite Movies</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={movies} />
      <h2>Add a New Movie</h2>
      <MovieForm onAddMovie={handleAddMovie} />
    </>
  );
};

export default App;
