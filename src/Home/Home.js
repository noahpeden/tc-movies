import { Link } from 'react-router-dom';
import MovieList from '../MovieList';
import { StyledHomeText } from '../styledComponents';

export default function Home() {
  return (
    <div>
      <StyledHomeText>
        <h1>Hello and welcome to TC Movies!</h1>
        <span>
          Below you'll see the first several movies or you can see all movies{' '}
          <Link to="/movies">here</Link>
        </span>
      </StyledHomeText>
      <MovieList count={9} />
    </div>
  );
}
