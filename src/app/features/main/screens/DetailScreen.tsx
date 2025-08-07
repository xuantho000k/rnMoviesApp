import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../navigators/AppNavigator'
import { useMovie } from '../hooks/useMovie'
import FastImage from 'react-native-fast-image'
import { Configs } from '../../../../utils/configs'
import { CastCarousel } from '../components/CastCarousel'
import { useCredits } from '../hooks/useCredits'

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>

const DetailScreen = ({ route }: DetailScreenProps) => {
  const { movieId } = route.params
  const { data, isLoading, error } = useMovie(movieId)
  const { data: credit } = useCredits(movieId)

  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error fetching movie details</Text>
  if (!data) return <Text>No movie details found</Text>

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>{data.title} ({data.year})</Text>
      <View style={styles.row}>
        <FastImage source={{ uri: `${Configs.IMAGE_BASE_URL}${data.posterUrl}` }} style={styles.poster} />
        <View style={styles.info}>
          <Text style={styles.rating}>{data.rating}</Text>
          <Text style={styles.release}>{data.releaseDate} • {data.runtime}m</Text>
          <Text style={styles.genres}>{data.genres.map(g => g.name).join(', ')}</Text>
          <Text>Status: <Text style={styles.bold}>{data.status}</Text></Text>
          <Text>Original Language: <Text style={styles.bold}>{data.originalLanguage}</Text></Text>
        </View>
      </View>

      <View style={styles.creditsScoreSection}>
        {/* User Score */}
        <View style={styles.userScoreSection}>
          <View style={styles.userScoreCircle}>
            <Text style={styles.userScoreText}>{Math.round(data.userScore * 10)}%</Text>
          </View>
          <Text style={styles.userScoreLabel}>User Score</Text>
        </View>

        {/* Credits */}
        <View style={styles.creditsSection}>
          {credit?.crew.map((item, idx) => (
            <Text key={idx} style={styles.creditText}>
              {item.name} <Text style={styles.creditRole}>{item.role}</Text>
            </Text>
          ))}
        </View>
      </View>

      {/* Tagline */}
      {data.tagline ? (
        <Text style={styles.tagline}>{data.tagline}</Text>
      ) : null}

      {/* Overview */}
      <Text style={styles.overviewTitle}>Overview</Text>
      <Text style={styles.overview}>{data.overview}</Text>

      {/* Add to Watchlist Button */}
      <TouchableOpacity style={styles.watchlistButton}>
        <Text style={styles.watchlistButtonText}>Add To Watchlist</Text>
      </TouchableOpacity>

      {/* Cast Carousel */}
      <Text style={styles.castTitle}>Top Billed Cast</Text>
      <CastCarousel cast={credit?.cast || []} />
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e0f7fa', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  row: { flexDirection: 'row', marginBottom: 16 },
  poster: { width: 100, height: 150, borderRadius: 8, marginRight: 16 },
  info: { flex: 1, justifyContent: 'space-between' },
  rating: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  release: { fontSize: 14, color: '#555', marginBottom: 4 },
  genres: { fontSize: 14, color: '#555', marginBottom: 4 },
  bold: { fontWeight: 'bold' },
  creditsScoreSection: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 12 },
  creditsSection: { marginVertical: 12 },
  creditText: { fontSize: 16 },
  creditRole: { color: '#555', fontStyle: 'italic', fontSize: 12 },
  userScoreSection: { flexDirection: 'row', alignItems: 'center', marginVertical: 12 },
  userScoreCircle: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#009688', justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  userScoreText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  userScoreLabel: { fontSize: 16, color: '#555' },
  tagline: { fontStyle: 'italic', color: '#333', marginVertical: 8 },
  overviewTitle: { fontWeight: 'bold', fontSize: 18, marginTop: 12 },
  overview: { fontSize: 16, color: '#333', marginBottom: 16 },
  watchlistButton: { borderWidth: 1, borderColor: '#009688', borderRadius: 6, padding: 10, alignItems: 'center', marginBottom: 16 },
  watchlistButtonText: { color: '#009688', fontWeight: 'bold' },
  castTitle: { fontWeight: 'bold', fontSize: 18, marginBottom: 8 },
})

export default DetailScreen