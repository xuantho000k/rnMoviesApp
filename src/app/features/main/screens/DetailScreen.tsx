import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import CastCarousel from '../components/CastCarousel'

const DetailScreen = ({ route }) => {
  const { movie } = route.params

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.releaseDate}>{movie.releaseDate}</Text>
      <Text style={styles.rating}>Rating: {movie.rating}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <CastCarousel cast={movie.cast} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  releaseDate: {
    fontSize: 16,
    color: 'gray',
  },
  rating: {
    fontSize: 16,
    marginVertical: 8,
  },
  overview: {
    fontSize: 16,
    marginVertical: 8,
  },
})

export default DetailScreen