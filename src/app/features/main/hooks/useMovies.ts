import { useQuery } from '@tanstack/react-query'
import moviesServices from '../services/movie-services/moviesServices'

type UseMoviesParams = {
  category: string
  searchTerm?: string
  page?: number
}

export const useMovies = ({
  category,
  searchTerm = '',
  page = 1,
}: UseMoviesParams) => {
  return useQuery({
    queryKey: ['ListMovies', category, searchTerm, page],
    queryFn: () => moviesServices.fetchMovies(category, searchTerm, page),
    placeholderData: previousData => previousData,
  })
}
