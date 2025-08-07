import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
import MovieCard from './MovieCard'
import { Movie } from '../types/movie'

type MovieListProps = {
  movies: Movie[]
  onPress?: (movieId: number) => void
}

const MovieList = ({ movies, onPress } : MovieListProps) => {
  const renderItem = useCallback(({ item }: { item: Movie }) => (
    <MovieCard movie={item} onPress={onPress}/>
  ), [onPress])

  return (
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        initialNumToRender={5}
      />
  )
}

export default MovieList