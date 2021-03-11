import { Link } from 'react-router-dom';
import { StyledNavBar } from '../styledComponents';

export default function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
}
