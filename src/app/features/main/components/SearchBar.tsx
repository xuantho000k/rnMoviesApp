import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

type SearchBarProps = {
  onSearch: (searchTerm: string) => void
}

const SearchBar = ({ onSearch } : SearchBarProps ) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    onSearch(searchTerm)
    setSearchTerm('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
})

export default SearchBar