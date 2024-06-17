import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { TabNavigation } from './navigators/TabNavigation'

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TabNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
