import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { ImageGallery } from './components/ImageGallery'
import { DrawerNavigation } from './navigators/DrawerNavigation'

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageGallery />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
