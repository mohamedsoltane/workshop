import React, { useState } from 'react';

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePosterURLChange = (event) => {
    setPosterURL(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleAddMovie = () => {
    const newMovie = {
      title: title,
      description: description,
      posterURL: posterURL,
      rating: rating,
    };

    onAddMovie(newMovie);

    
    setTitle('Hollywood full crime action movie 2022 - Jason Statham');
    setDescription('action movie, best action movies, english movies, film, full movie, movies, full movies, action movies, movie, v movies, free movies');
    setPosterURL('https://fr.web.img5.acsta.net/pictures/23/05/10/10/55/5129031.jpg');
    setRating('5');

  };

  return (
    <div className="movie-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={handlePosterURLChange}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={handleRatingChange}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default MovieForm;
