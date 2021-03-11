import { useContext } from 'react';
import { AppContext } from '../AppContext';
import MovieCard from '../MovieCard';
import { StyledMovieList } from '../styledComponents';

export default function Favorites() {
  const { state } = useContext(AppContext);

  return state.favorites.length > 0 ? (
    state.favorites.map((fav) => {
      return (
        <StyledMovieList>
          <MovieCard movie={fav} />
        </StyledMovieList>
      );
    })
  ) : (
    <h1>You currently have no favorites</h1>
  );
}
