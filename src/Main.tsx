import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { AuthProvider } from './context/useAuth'
import { CartProvider } from './context/cartContext'
import { TabNavigation } from './navigators/TabNavigation'

export default function Main() {
  return (
    <CartProvider>
      <AuthProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <TabNavigation />
        </View>
      </AuthProvider>
    </CartProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
