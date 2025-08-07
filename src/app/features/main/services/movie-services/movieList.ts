import { Movie } from "../../types/movie";
import { movieAPIClient } from "../movieAPIClient";

export const movieList = async (category: string, searchTerm?: string, page = 1) => {
    try {
      const params: { query?: string; page?: number } = {
        page: page,
      }
      if (searchTerm) {
        params.query = searchTerm
      }
      const response = await movieAPIClient.get(`/movie/${category}`, {
        params: params
      })
      if (response.ok) {
        const data = response.data as { results?: any[] }
        const results: Movie[] = (data.results || []).map((item: any) => ({
          id: item.id,
          title: item.title,
          posterUrl: item.poster_path,
          overview: item.overview,
          releaseDate: item.release_date,
        }))
        return results
      } else {
        throw new Error(`Error fetching movies: ${response.problem}`)
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
      throw error
    }
  }