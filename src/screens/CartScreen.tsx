import React from 'react'
import { FlatList, StyleSheet, Text, ScrollView, View } from 'react-native'

import { CardProduct } from '../components/CardProduct'
import { OrderSummary } from '../components/OrderSummary'

const products = [
  {
    id: '1',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    price: 1399,
    src: 'https://i5.walmartimages.com/seo/AT-T-XGODY-Cheap-Android-Phones-Unlocked-Cell-Phones-4000mAh-6-3-T-mobile-Unlocked-Phones_b5bc8f0c-bdf5-43b8-b507-8b5353a20d51.ab73e73c3f986aef10112ac0c1a95e3c.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
  },
  {
    id: '2',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    price: 1399,
    src: 'https://i5.walmartimages.com/seo/AT-T-XGODY-Cheap-Android-Phones-Unlocked-Cell-Phones-4000mAh-6-3-T-mobile-Unlocked-Phones_b5bc8f0c-bdf5-43b8-b507-8b5353a20d51.ab73e73c3f986aef10112ac0c1a95e3c.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
  },
  {
    id: '3',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    price: 1399,
    src: 'https://i5.walmartimages.com/seo/AT-T-XGODY-Cheap-Android-Phones-Unlocked-Cell-Phones-4000mAh-6-3-T-mobile-Unlocked-Phones_b5bc8f0c-bdf5-43b8-b507-8b5353a20d51.ab73e73c3f986aef10112ac0c1a95e3c.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
  },
]

export const CartScreen = () => {
  const prices = products.map((product) => product.price)

  const handleProductChange = (id: string, value: number) => {}

  const handleProductDelete = (id: string) => {}

  const renderProduct = (item: { id: any; name: any; price: any; src: any }) => (
    <CardProduct
      key={item.id}
      imageUrl={item.src}
      name={item.name}
      price={item.price}
      onChange={(value) => handleProductChange(item.id, value)}
      onDelete={() => handleProductDelete(item.id)}
    />
  )

  const renderSeparator = () => <View style={styles.separator} />

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Shopping Cart</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => renderProduct(item)}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeparator}
          contentContainerStyle={styles.listContent}
        />
        <OrderSummary iva={21} discountPercentage={10} prices={prices} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  listContent: {
    paddingBottom: 16,
    paddingHorizontal: 26,
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
})

export default CartScreen
