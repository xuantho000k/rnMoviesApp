import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'

const CastCarousel = ({ cast }) => {
  const renderItem = ({ item }) => (
    <View style={styles.castItem}>
      <Image source={{ uri: item.profile_path }} style={styles.castImage} />
      <Text style={styles.castName}>{item.name}</Text>
    </View>
  )

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={cast}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  carouselContainer: {
    paddingVertical: 10,
  },
  castItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  castImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  castName: {
    marginTop: 5,
    textAlign: 'center',
  },
})

export default CastCarousel