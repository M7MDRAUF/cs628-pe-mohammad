/**
 * @file GenreFilter.js
 * @description Functional component that renders a dropdown select element
 *              for filtering movies by genre. Extracts unique genres from
 *              the movie data and includes an "All Genres" option.
 * @author Mohammed Rauf
 * @version 1.0.0
 */

import React from "react";
import "./GenreFilter.css";

/**
 * GenreFilter - A functional component that provides genre-based filtering.
 *
 * @param {Object}   props                - Component properties.
 * @param {Array}    props.genres         - Array of unique genre strings to populate the dropdown.
 * @param {string}   props.selectedGenre  - The currently selected genre value.
 * @param {Function} props.onGenreChange  - Callback function invoked when the user selects a genre.
 * @returns {JSX.Element} A dropdown select element for genre filtering.
 */
function GenreFilter({ genres, selectedGenre, onGenreChange }) {
  return (
    /* Container for the genre filter dropdown */
    <div className="genre-filter">
      {/* Label for accessibility — visually hidden but available to screen readers */}
      <label htmlFor="genre-select" className="sr-only">
        Filter by Genre
      </label>

      {/* Dropdown select element for genre filtering */}
      <select
        id="genre-select"
        className="genre-select"
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        {/* Default option to show all movies regardless of genre */}
        <option value="All Genres">All Genres</option>

        {/* Dynamically render an option for each unique genre */}
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

// Export the GenreFilter component for use in MovieList
export default GenreFilter;
