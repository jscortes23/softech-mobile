import React, { useState } from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'

import { StyledText } from './StyledText'

interface CardProductProps {
  onChange?: (value: number) => void
  value: number
  price: number
  imageUrl: string
}

export const CardProduct: React.FC<CardProductProps> = ({ onChange, value, price, imageUrl }) => {
  const [quantity, setQuantity] = useState<number>(value)

  const incrementQuantity = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    if (onChange) {
      onChange(newQuantity)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      if (onChange) {
        onChange(newQuantity)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTINL4T_sVLqeIEGWbgXiNLBv6A7ZDOaVdvGEntZGVgTcjMA1a6qntK0bC5aisboKHh9q_v5A4JAT-Jgn3LyvtIZ5a-drNxLvd3TY1FWBqD45BOBv-XBiOZDg&usqp=CAE',
        }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <StyledText>Apple Iphone 15 Pro Max 128GB Dark Grey</StyledText>
        <Text style={styles.priceText}>${(price * quantity).toFixed(2)}</Text>
        <View style={styles.quantitySelector}>
          <Button title="-" onPress={decrementQuantity} />
          <Text style={styles.quantityText}>{quantity}</Text>
          <Button title="+" onPress={incrementQuantity} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
})
