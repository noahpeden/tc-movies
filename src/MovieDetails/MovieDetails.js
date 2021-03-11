import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';
import MovieCard from '../MovieCard';
import { StyledDetails } from '../styledComponents';

export default function MovieDetails() {
  const { id } = useParams();
  const { state } = useContext(AppContext);

  const details = state?.movies?.find((movie) => movie.imdb_id === id);

  return (
    <StyledDetails>
      <MovieCard movie={details} />
    </StyledDetails>
  );
}
