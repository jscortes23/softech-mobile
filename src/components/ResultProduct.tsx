import { View, Text, Image, StyleSheet } from 'react-native'

import { ButtonPrimary } from './ButtonPrimary'
import { CartIcon } from './icons/Icons'

interface ResultProductProps {
  productName: string
  productImage: string
  productPrice: number
  onAddToCart: () => void
  onBuyNow: () => void
}

export const ResultProduct: React.FC<ResultProductProps> = (props) => {
  const { productName, productImage, productPrice, onAddToCart, onBuyNow } = props

  return (
    <View style={styles.card}>
      <Image source={{ uri: productImage }} style={styles.image} />
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.productPrice}>${productPrice}</Text>
      <View style={styles.buttonContainer}>
        <ButtonPrimary onPress={onBuyNow} text="Buy Now" variant="primary" />
        <ButtonPrimary
          onPress={onAddToCart}
          icon={<CartIcon width={20} height={20} color="#000" />}
          variant="secondary"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 16,
  },
  productName: {
    fontSize: 16,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    color: '#000',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
})
