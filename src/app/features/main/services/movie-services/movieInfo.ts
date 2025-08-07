import { MovieDetail } from "../../types/movieDetail"
import { movieAPIClient } from "../movieAPIClient"

export const movieInfo = async (movieId: number) => {
    try {
        const response = await movieAPIClient.get(`/movie/${movieId}`)
        if (response.ok) {
            const data = response.data as any
            const details: MovieDetail = {
                id: data.id,
                title: data.title,
                year: new Date(data.release_date).getFullYear(),
                rating: data.adult ? 'R' : 'PG13',
                posterUrl: data.poster_path,
                releaseDate: data.release_date,
                runtime: data.runtime,
                genres: data.genres,
                status: data.status,
                originalLanguage: data.original_language,
                userScore: data.vote_average,
                tagline: data.tagline,
                overview: data.overview
            }
            return details
        } else {
            throw new Error(`Error fetching movie details: ${response.problem}`)
        }
    } catch (error) {
        console.error('Error fetching movie details:', error)
        throw error
    }
}