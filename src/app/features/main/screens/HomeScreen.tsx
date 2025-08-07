import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CategoryDropdown from '../../../../shared/components/CategoryDropDown/CategoryDropdown'
import SearchBar from '../../../../shared/components/SearchBar'
import MovieList from '../components/MovieList'
import { useMovies } from '../hooks/useMovies'
import { CategoryOption } from '../../../../shared/components/CategoryDropDown/categoryOption'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../navigators/AppNavigator'
import { CATEGORY_OPTION } from '../constants/constants'
import { SearchButton } from '../components/SearchButton'

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>()
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>({ label: 'Now Playing', value: 'now_playing' })
  const [searchKeyword, setSearchKeyword] = useState('')

  const { data, isLoading, error } = useMovies({
    category: selectedCategory.value,
    searchTerm: searchKeyword,
    page: 1,
  })

  if (isLoading) {
    return <View style={styles.container}><Text>Loading...</Text></View>
  }
  if (error) {
    return <View style={styles.container}><Text>Error fetching movies</Text></View>
  }

  const handleSearch = () => {
    if (!searchKeyword.trim()) {
      return
    }
    // Optionally, you can trigger a new fetch here if needed
    // useMovies({ category: selectedCategory.value, searchTerm: searchKeyword, page: 1 })
  }

  const handleSearchTermChange = (searchTerm: string) => {
    setSearchKeyword(searchTerm)
  }

  const handleCategoryChange = (category: CategoryOption) => {
    setSelectedCategory(category)
  }

  const handleMoviePress = (movieId: number) => {
    navigation.navigate('Detail', { movieId })
  }

  return (
    <View style={styles.container}>
      <CategoryDropdown categoryOptions={CATEGORY_OPTION} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <SearchBar onSearchTermChange={handleSearchTermChange} />
      <SearchButton onPress={() => handleSearch()} title='Search' />
      <MovieList movies={data || []} onPress={handleMoviePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})

export default HomeScreen