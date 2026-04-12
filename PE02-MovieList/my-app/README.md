## PE02 - Movie List — CS 628 Full-Stack Development — Mohammed Rauf

---

# Input

The application receives two forms of user input. First, the movie data is defined as a hard-coded array of JavaScript objects within the `MovieList` component; each object contains a **Title** (string), **Genre** (string), and **ReleaseYear** (number). Second, the user interacts with the application through a genre-filter dropdown and clickable movie cards. The dropdown offers "All Genres" plus every unique genre extracted from the data array. Selecting a genre value triggers a React `onChange` event that updates the component state.

# Process

The `MovieList` component uses the React `useState` hook to manage the currently selected genre. On every state change, the component re-renders: it filters the movie array by comparing each movie's `Genre` property against the selected value. If "All Genres" is selected, no filtering is applied and the full array is displayed. Unique genres are computed with a `Set` to eliminate duplicates. When a user clicks a movie card, an `onClick` handler fires the browser `alert()` function, displaying the movie title. The application follows a modular component architecture—`MovieCard`, `GenreFilter`, and `MovieList`—with clear import/export separation.

# Output

The rendered output is a responsive web page showing the heading "Movie List," a centered genre-filter dropdown, and a vertically stacked list of styled movie cards. Each card displays the movie title in bold, the genre, and the release year prefixed with "Released:". Filtering instantly updates the visible cards. Clicking a card produces a browser alert reading `You clicked on "<Title>"`. The interface uses clean CSS with hover effects and keyboard-accessible focus states, delivering an intuitive and professional user experience.
