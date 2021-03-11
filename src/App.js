import { Route, Switch } from 'react-router-dom';
import { AppContextProvider } from './AppContext';
import Home from './Home';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import NavBar from './NavBar';
import Favorites from './Favorites'

function App() {
  return (
    <main>
      <AppContextProvider>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" component={MovieList} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </AppContextProvider>
    </main>
  );
}

export default App;
