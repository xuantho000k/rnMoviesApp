import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Movie } from '../types/movie'
import FastImage from 'react-native-fast-image'
import { Configs } from '../../../../utils/configs'

type MovieCardProps = {
  movie: Movie
  onPress?: (movieId: number) => void
}

const MovieCard = ({ movie, onPress }: MovieCardProps) => {
  return (
    <Pressable onPress={() => onPress?.(movie.id)}>
      <View style={styles.card}>
        <FastImage source={{
          uri: `${Configs.IMAGE_BASE_URL}${movie.posterUrl}`
        }} style={styles.poster} />
        <View style={styles.info}>
          <View>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{movie.title}</Text>
            <Text style={styles.releaseDate} numberOfLines={1} ellipsizeMode="tail">{movie.releaseDate}</Text>
          </View>
          <Text style={styles.overview} numberOfLines={2} ellipsizeMode='tail'>{movie.overview}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    margin: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    height: 141,
  },
  poster: {
    width: 141,
    height: '100%',
  },
  info: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1,
    marginRight: 8,
  },
  releaseDate: {
    fontSize: 14,
    color: '#666',
    flexShrink: 0,
  },
  overview: {
    fontSize: 12,
    color: '#333',
  }
})

export default MovieCard