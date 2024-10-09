import { View, Image, StyleSheet, Pressable } from 'react-native'

import { ButtonPrimary } from './ButtonPrimary'
import { StyledText } from './StyledText'
import { CartIcon } from './icons/Icons'
import { colors } from '../config/themes/appThemes'
import { useCart } from '../context/cartContext'

interface ResultProductProps {
  productId: number
  productName: string
  productImage: string
  productPrice: number
  onBuyNow?: () => void
}

export const ResultProduct: React.FC<ResultProductProps> = (props) => {
  const { productId, productName, productImage, productPrice, onBuyNow } = props
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id_producto: productId,
      descripcion_producto: productName,
      valor_unitario: productPrice,
      imagen_miniatura_producto: productImage,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Pressable onPress={handleAddToCart} style={styles.icon}>
          <CartIcon height={32} width={32} />
        </Pressable>
        <Image source={{ uri: productImage }} style={styles.image} />
        <View style={styles.cardContent}>
          <StyledText body2 center>
            {productName}
          </StyledText>
          <StyledText title2 bold center>
            ${productPrice}
          </StyledText>
        </View>
      </View>
      <ButtonPrimary onPress={onBuyNow} text="Comprar Ahora" variant="primary" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral10,
    paddingHorizontal: 12,
    paddingVertical: 24,
    justifyContent: 'space-between',
    flex: 1,
    rowGap: 8,
  },
  card: {
    alignItems: 'center',
    borderRadius: 8,
    rowGap: 8,
  },
  icon: {
    alignSelf: 'flex-end',
  },
  image: {
    width: 104,
    height: 104,
  },
  cardContent: {
    rowGap: 16,
  },
})
