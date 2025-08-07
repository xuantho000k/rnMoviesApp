import { useQuery } from '@tanstack/react-query'
import moviesServices from '../services/movie-services/moviesServices'
import { MovieDetail } from '../types/movieDetail'

export const useMovie = (movieId: number) => {
  return useQuery<MovieDetail>({
    queryKey: ['movie', movieId],
    queryFn: async () => {
      const data = await moviesServices.fetchMovieDetails(movieId)
      return data as MovieDetail
    },
    enabled: !!movieId, 
  })
}