export type GenreMovie = {
    id: number
    name: string
}

export type MovieDetail = {
  id: number
  title: string
  year: number
  rating: string
  posterUrl: string
  releaseDate: string
  runtime: number
  genres: GenreMovie[]
  status: string
  originalLanguage: string
  userScore: number
  tagline: string
  overview: string
}