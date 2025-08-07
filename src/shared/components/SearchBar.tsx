import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

type SearchBarProps = {
  onSearchTermChange: (searchTerm: string) => void
}

const SearchBar = ({ onSearchTermChange } : SearchBarProps ) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onChangeText = (text: string) => {
    setSearchTerm(text)
    onSearchTermChange(text)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={onChangeText}
      />
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