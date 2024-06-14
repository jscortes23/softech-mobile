import { useState } from 'react'
import { View, Image, StyleSheet, FlatList, Pressable } from 'react-native'

type ImageType = {
  id: number
  src: NodeRequire | string
}

interface ImageGalleryProps {
  images: ImageType[]
}

export const ImageGallery: React.FC<ImageGalleryProps> = (props) => {
  const { images } = props
  const [selectedImage, setSelectedImage] = useState(images[0].src)

  const renderItem = (image: any) => {
    const isSelected = image.src === selectedImage
    return (
      <Pressable key={image.id} onPress={() => setSelectedImage(image.src)}>
        <Image
          source={typeof image.src === 'string' ? { uri: image.src } : image.src}
          style={[styles.thumbnail, { opacity: isSelected ? 1 : 0.4 }]}
        />
      </Pressable>
    )
  }

  return (
    <View style={styles.container}>
      <Image
        source={typeof selectedImage === 'string' ? { uri: selectedImage } : selectedImage}
        style={styles.mainImage}
      />
      <FlatList
        contentContainerStyle={styles.thumbnailContainer}
        horizontal
        data={images}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 30,
  },
  mainImage: {
    width: 200,
    height: 200,
    marginHorizontal: 'auto',
  },
  thumbnailContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  thumbnail: {
    width: 66,
    height: 66,
  },
})
