import React from 'react'
import { FlatList, View } from 'react-native'
import MovieCard from './MovieCard'
import { Movie } from '../types/movie'

type MovieListProps = {
  movies: Movie[]
}

const MovieList = ({ movies } : MovieListProps) => {
  const renderItem = ({ item }: { item: Movie }) => (
    <MovieCard movie={item}/>
  )

  return (
    <View>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default MovieList