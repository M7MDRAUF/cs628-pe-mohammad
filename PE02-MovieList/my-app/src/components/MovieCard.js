/**
 * @file MovieCard.js
 * @description Functional component that renders an individual movie card.
 *              Displays the movie title, genre, and release year within a styled card.
 *              Supports click events to alert the movie title.
 * @author Mohammed Rauf
 * @version 1.0.0
 */

import React from "react";
import "./MovieCard.css";

/**
 * MovieCard - A functional component representing a single movie entry.
 *
 * @param {Object}   props              - Component properties.
 * @param {string}   props.title        - The title of the movie.
 * @param {string}   props.genre        - The genre of the movie.
 * @param {number}   props.releaseYear  - The release year of the movie.
 * @param {Function} props.onClick      - Callback function invoked when the card is clicked.
 * @returns {JSX.Element} A styled card element displaying movie information.
 */
function MovieCard({ title, genre, releaseYear, onClick }) {
  return (
    /* Movie card container — clicking triggers the onClick handler */
    <div className="movie-card" onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e) => {
        // Allow keyboard activation with Enter or Space for accessibility
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      {/* Movie title displayed in bold */}
      <h2 className="movie-title">{title}</h2>

      {/* Movie genre displayed below the title */}
      <p className="movie-genre">{genre}</p>

      {/* Release year formatted with label */}
      <p className="movie-year">Released: {releaseYear}</p>
    </div>
  );
}

// Export the MovieCard component for use in MovieList
export default MovieCard;
