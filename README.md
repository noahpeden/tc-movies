## This is a React app utilizing `useReducer` and `Context` to manage a movie data array and show different details of the movies. This was done in about two hours and has the following features: 


1. The movie data lives in an artificial redux store I built using context, this allows the movies to be accessible by any component
2. There's a home page, an all movies page, a single movie page to view details by imdb_id, and a favorites page. The home only shows the first nine movies, the movies page shows them all, and the favorites exclusively shows what you've marked as your favorite.
3. You can mark a movie as your favorite and add it to a list which is viewable under the Favorites page.
4. Miscellaneous items: "See details" goes to a route that is based on the imdb_id, and allows the user to see more info about the movie than what is required in the prompt. I've added a couple UX conditionals including removing the "See details" link when you're on a single movie route, I've removed the "Add to favorites" button when you're at "/favorites", and I made sure that you can't add a duplicate Favorite to the favorites array in the context/redux state.

To run this, clone the repo, run `yarn` and `yarn start`
