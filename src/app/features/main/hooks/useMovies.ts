import { useQuery } from '@tanstack/react-query'
import moviesService from '../services/movies-service'

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
    queryFn: () => moviesService.fetchMovies(category, searchTerm, page),
    placeholderData: previousData => previousData,
  })
}
