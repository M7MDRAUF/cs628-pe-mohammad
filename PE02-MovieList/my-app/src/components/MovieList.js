/**
 * @file MovieList.js
 * @description Main stateful functional component for the Movie List application.
 *              Manages the genre filter state using React useState hook.
 *              Renders the GenreFilter dropdown and a list of MovieCard components.
 *              Implements filtering logic and click-to-alert event handling.
 * @author Mohammed Rauf
 * @version 1.0.0
 */

import React, { useState } from "react";
import MovieCard from "./MovieCard";
import GenreFilter from "./GenreFilter";
import "./MovieList.css";

/**
 * MovieList - The main component of the application.
 * Uses the useState hook to manage the selected genre for filtering.
 * Extracts unique genres from the movie data for the dropdown.
 * Filters movies based on the selected genre.
 * Handles click events on movie cards to display alerts.
 *
 * @returns {JSX.Element} The complete Movie List UI with filter and movie cards.
 */
function MovieList() {
  /**
   * Array of movie objects with Title, Genre, and ReleaseYear.
   * This data source is defined inside the MovieList component
   * and drives all rendering and filtering logic.
   * @type {Array<{Title: string, Genre: string, ReleaseYear: number}>}
   */
  const movies = [
    { Title: "Inception", Genre: "Science Fiction", ReleaseYear: 2010 },
    { Title: "The Shawshank Redemption", Genre: "Drama", ReleaseYear: 1994 },
    { Title: "The Dark Knight", Genre: "Action", ReleaseYear: 2008 },
    { Title: "Interstellar", Genre: "Science Fiction", ReleaseYear: 2014 },
    { Title: "The Godfather", Genre: "Drama", ReleaseYear: 1972 },
    { Title: "Gladiator", Genre: "Action", ReleaseYear: 2000 },
    { Title: "Forrest Gump", Genre: "Drama", ReleaseYear: 1994 },
    { Title: "The Matrix", Genre: "Science Fiction", ReleaseYear: 1999 },
  ];

  /**
   * State variable to track the currently selected genre.
   * Initialized to "All Genres" so all movies display by default.
   * @type {[string, Function]}
   */
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  /**
   * Extract unique genres from the movies array.
   * Uses Set to eliminate duplicates, then converts back to an array.
   * This array populates the GenreFilter dropdown options.
   * @type {string[]}
   */
  const uniqueGenres = [...new Set(movies.map((movie) => movie.Genre))];

  /**
   * Filter movies based on the selected genre.
   * If "All Genres" is selected, return the full movies array.
   * Otherwise, return only movies whose Genre matches the selection.
   * @type {Array<{Title: string, Genre: string, ReleaseYear: number}>}
   */
  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.Genre === selectedGenre);

  /**
   * Handle click event on a movie card.
   * Displays a browser alert with the clicked movie's title.
   *
   * @param {string} title - The title of the clicked movie.
   */
  const handleMovieClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  /**
   * Handle genre selection change from the dropdown.
   * Updates the selectedGenre state, which triggers re-rendering
   * and re-filtering of the movie list.
   *
   * @param {string} genre - The newly selected genre value.
   */
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    /* Main container for the Movie List application */
    <div className="movie-list-container">
      {/* Application heading */}
      <h1 className="movie-list-heading">Movie List</h1>

      {/* Genre filter dropdown — passes unique genres and current selection */}
      <GenreFilter
        genres={uniqueGenres}
        selectedGenre={selectedGenre}
        onGenreChange={handleGenreChange}
      />

      {/* List of movie cards — renders filtered results */}
      <div className="movie-cards">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.Title}
            title={movie.Title}
            genre={movie.Genre}
            releaseYear={movie.ReleaseYear}
            onClick={() => handleMovieClick(movie.Title)}
          />
        ))}
      </div>
    </div>
  );
}

// Export the MovieList component as the default export
export default MovieList;
