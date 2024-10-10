import React, { useState } from 'react'
import { FlatList, StyleSheet, ScrollView, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { CardProduct } from '../components/CardProduct'
import { ContainerMain } from '../components/ContainerMain'
import { OrderSummary } from '../components/OrderSummary'
import { StyledText } from '../components/StyledText'
import { colors } from '../config/themes/appThemes'
import { StackParamList } from '../navigators/StackNavigation'
import { CartItem, useCart } from '../context/cartContext'
import { postCOPtoUSD } from '../services/postCOPtoUSD'

type CartScreenProps = NativeStackScreenProps<StackParamList, 'Cart'>

export const CartScreen: React.FC<CartScreenProps> = (props) => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart()
  const [totalUSD, setTotalUSD] = useState()
  const { navigation } = props

  const handleRemoveItem = (itemId: number) => {
    removeFromCart(itemId)
  }

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    updateQuantity(itemId, newQuantity)
  }

  const handleCheckout = async () => {
    const res = await postCOPtoUSD(getTotalPrice())
    setTotalUSD && setTotalUSD(res.total_usd)
    navigation.navigate('Payment', { totalUSD: totalUSD })
  }

  const renderProduct = (item: CartItem) => (
    <CardProduct
      key={item.id_producto}
      imageUrl={item.imagen_miniatura_producto}
      name={item.descripcion_producto}
      price={Number(item.valor_unitario)}
      onDelete={() => handleRemoveItem(item.id_producto)}
    />
  )

  const renderSeparator = () => <View style={styles.separator} />

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ContainerMain>
        <StyledText title2 style={styles.title}>
          Shopping Cart
        </StyledText>
        <FlatList
          scrollEnabled={false}
          data={items}
          renderItem={({ item }) => renderProduct(item)}
          keyExtractor={(item) => item.id_producto.toString()}
          ItemSeparatorComponent={renderSeparator}
        />
        <OrderSummary
          iva={21}
          totalPrice={getTotalPrice()}
          onPress={handleCheckout}
        />
      </ContainerMain>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    marginBottom: 20,
  },
  scrollContainer: {
    backgroundColor: colors.white,
    paddingBottom: 20,
  },
  separator: {
    height: 15,
    backgroundColor: 'transparent',
  },
})
