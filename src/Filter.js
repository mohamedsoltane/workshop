import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };
  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
  };
  const handleFilter = () => {
    onFilter({ title: titleFilter, rating: ratingFilter });
  };
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={handleRatingChange}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
