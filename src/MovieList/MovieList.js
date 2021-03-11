import { useContext } from 'react';
import { AppContext } from '../AppContext';
import MovieCard from '../MovieCard';
import { StyledMovieList } from '../styledComponents';

export default function MovieList({ count = null }) {
  const { state } = useContext(AppContext);
  const countedList = count ? state.movies.slice(0, count) : state.movies;
  return (
    <StyledMovieList>
      {countedList?.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </StyledMovieList>
  );
}
