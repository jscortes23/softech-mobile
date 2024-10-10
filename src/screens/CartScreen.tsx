import React, { useState } from 'react'
import { FlatList, StyleSheet, ScrollView, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { CardProduct } from '../components/CardProduct'
import { ContainerMain } from '../components/ContainerMain'
import { OrderSummary } from '../components/OrderSummary'
import { StyledText } from '../components/StyledText'
import { colors } from '../config/themes/appThemes'
import { StackParamList } from '../navigators/StackNavigation'

const initialProducts = [
  {
    id: '1',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    price: 1399,
    src: 'https://prints.ultracoloringpages.com/4d4e53262cd35c980ad27cdb71c14b4c.png',
  },
  {
    id: '2',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    price: 1399,
    src: 'https://prints.ultracoloringpages.com/4d4e53262cd35c980ad27cdb71c14b4c.png',
  },
  {
    id: '3',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    price: 1399,
    src: 'https://prints.ultracoloringpages.com/4d4e53262cd35c980ad27cdb71c14b4c.png',
  },
]

type CartScreenProps = NativeStackScreenProps<StackParamList, 'Cart'>

export const CartScreen: React.FC<CartScreenProps> = (props) => {
  const [products, setProducts] = useState(initialProducts)
  const [prices, setPrices] = useState<number[]>(products.map((product) => product.price))

  const handleRemoveItem = (itemId: string) => {
    setProducts((prevProducts) => prevProducts.filter((item) => item.id !== itemId))
    setPrices((prevPrices) => prevPrices.filter((_, index) => products[index].id !== itemId))
  }

  const handlePriceChange = (index: number, newPrice: number) => {
    setPrices((prevPrices) => {
      const updatedPrices = [...prevPrices]
      updatedPrices[index] = newPrice
      return updatedPrices
    })
  }

  const renderProduct = (item: { id: any; name: any; price: any; src: any }, index: number) => (
    <CardProduct
      key={item.id}
      imageUrl={item.src}
      name={item.name}
      price={item.price}
      onDelete={() => handleRemoveItem(item.id)}
      onChange={(newPrice) => handlePriceChange(index, newPrice)}
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
          data={products}
          renderItem={({ item, index }) => renderProduct(item, index)}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
        <OrderSummary iva={21} discountPercentage={10} prices={prices} />
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
