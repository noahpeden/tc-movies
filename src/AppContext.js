import { createContext, useReducer } from 'react';
import { movies } from './movies';
export const AppContext = createContext();

const favorites = [];
const initialState = { movies, favorites };

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      // prevent duplicates from being added
      const index = state.favorites.findIndex((movie) => movie.imdb_id === action.payload.imdb_id);
      if (index === -1) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
      return {
        ...state,
      };
    default:
      break;
  }
};
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
