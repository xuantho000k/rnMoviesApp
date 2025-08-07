import { movieCreditInfo } from './movieCreditInfo';
import { movieInfo } from './movieInfo';
import { movieList } from './movieList';

const moviesServices = {
  fetchMovies: movieList,
  fetchMovieDetails: movieInfo,
  fetchMovieCredits: movieCreditInfo
}

export default moviesServices