import { useQuery } from '@tanstack/react-query'
import moviesServices from '../services/movie-services/moviesServices'
import { MovieCredit } from '../types/movieCredit'

export const useCredits = (movieId: number) => {
  return useQuery<MovieCredit>({
    queryKey: ['credits', movieId],
    queryFn: async () => {
      const data = await moviesServices.fetchMovieCredits(movieId)
      return data as MovieCredit
    },
    enabled: !!movieId, 
  })
}