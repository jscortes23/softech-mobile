import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { ResultProduct } from './components/ResultProduct'

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ResultProduct
        productName="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ...)"
        productImage="https://www.clevercel.co/cdn/shop/files/apple-iphone-14-pro-max-1.jpg?v=1697125405"
        productPrice={900}
        onAddToCart={() => console.log('Added to cart')}
        onBuyNow={() => console.log('Buying now')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
