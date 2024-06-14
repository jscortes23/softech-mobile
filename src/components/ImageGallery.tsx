import React, { useState } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const images = [
  { id: 1, src: require('../../assets/imagenes/celular1.jpg') },
  { id: 2, src: require('../../assets/imagenes/celular2.jpg') },
  { id: 3, src: require('../../assets/imagenes/celular3.jpg') },
  { id: 4, src: require('../../assets/imagenes/celular4.jpg') },
]

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].src)

  return (
    <View style={styles.container}>
      <Image source={selectedImage} style={styles.mainImage} />
      <ScrollView horizontal contentContainerStyle={styles.thumbnailContainer}>
        {images.map((image) => (
          <TouchableOpacity key={image.id} onPress={() => setSelectedImage(image.src)}>
            <Image source={image.src} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mainImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ccc',
  },
})
