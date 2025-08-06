import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import CategoryDropdown from '../components/CategoryDropdown'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import { useMovies } from '../hooks/useMovies'
import { CategoryOption } from '../types/category-options'

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>({ label: 'Now Playing', value: 'now_playing' })
  const [searchKeyword, setSearchKeyword] = useState('')

  const { data, isLoading, error } = useMovies({
    category: selectedCategory.value,
    searchTerm: searchKeyword,
    page: 1,
  })

  const handleSearch = (searchTerm: string) => {
    setSearchKeyword(searchTerm)
  }

  const handleCategoryChange = (category: CategoryOption) => {
    setSelectedCategory(category)
  }

  return (
    <View style={styles.container}>
      <CategoryDropdown selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={data || []} />
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