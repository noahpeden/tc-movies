import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { StyledCard } from '../styledComponents';

export default function MovieCard({ movie }) {
  const { dispatch } = useContext(AppContext);
  const handleAdd = () => {
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {
        title: movie.title,
        duration: movie.runtime,
        year: movie.year,
        meta_score: movie.meta_score,
        imdb_id: movie.imdb_id,
      },
    });
  };

  const { pathname } = useLocation();
  return (
    <StyledCard>
      <h3>Title: {movie.title}</h3>
      <p>Duration: {movie.runtime}</p>
      <p>Year: {movie.year}</p>
      <p>Meta Score: {movie.meta_score}</p>
      {pathname === `/movies/${movie.imdb_id}` && (
        <div>
          <p>Rated: {movie.rated}</p>
          <p>Director: {movie.director}</p>
          <p>Released: {movie.released}</p>
          <div>
            Plot: <p>{movie.plot}</p>
          </div>
        </div>
      )}
      {pathname !== `/movies/${movie.imdb_id}` && (
        <div>
          <Link to={`/movies/${movie.imdb_id}`}>See Details</Link>{' '}
        </div>
      )}
      {pathname !== '/favorites' && (
        <div>
          <button onClick={handleAdd}>Add to Favorites</button>
        </div>
      )}
    </StyledCard>
  );
}
