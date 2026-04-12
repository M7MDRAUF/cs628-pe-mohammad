/**
 * @file App.js
 * @description Root application component that renders the MovieList component.
 *              Serves as the entry point for the React component tree.
 * @author Mohammed Rauf
 * @version 1.0.0
 */

import React from "react";
import MovieList from "./components/MovieList";
import "./App.css";

/**
 * App - Root functional component of the application.
 * Renders the MovieList component which contains all the movie filtering
 * and display functionality.
 *
 * @returns {JSX.Element} The root application element.
 */
function App() {
  return (
    /* Main application wrapper with App class for global styling */
    <div className="App">
      {/* MovieList is the primary component containing all movie logic */}
      <MovieList />
    </div>
  );
}

// Export the App component as the default export
export default App;
