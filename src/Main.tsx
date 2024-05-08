import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import CellProduct from './components/CellProduct'

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <CellProduct name="Cell Producto" numberSales={500} price={50}></CellProduct>
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
