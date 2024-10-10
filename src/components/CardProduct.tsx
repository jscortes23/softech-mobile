import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet, Pressable } from 'react-native'

import { StyledText } from './StyledText'
import { MinusIcon, PlusIcon, DeleteIcon } from './icons/Icons'
import { colors } from '../config/themes/appThemes'

interface CardProductProps {
  price: number
  imageUrl: string | undefined
  name: string | undefined
  onDelete?: () => void
  onChange?: (newPrice: number) => void
}

export const CardProduct: React.FC<CardProductProps> = ({
  price,
  imageUrl,
  name,
  onDelete,
  onChange,
}) => {
  const [quantity, setQuantity] = useState<number>(1)

  const incrementQuantity = () => setQuantity(quantity + 1)
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1)

  useEffect(() => {
    onChange && onChange(quantity * price) // Solo afecta al precio total
  }, [quantity])

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <StyledText body1 bold>
          {name}
        </StyledText>
        <View style={styles.quantitySelector}>
          <StyledText subtitle1 bold>
            ${price} { }
          </StyledText>
        </View>
      </View>
      <Pressable onPress={onDelete} style={styles.closeIcon}>
        <DeleteIcon width={22} height={22} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    columnGap: 10,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
  },
  detailsContainer: {
    flex: 3,
  },
  containerQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quantityText: {
    paddingHorizontal: 12, // Reduce el espacio horizontal
    paddingVertical: 6, // Reduce el espacio vertical
    borderColor: colors.neutral40,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 14, // Ajusta el tamaño del texto para que se vea más pequeño y proporcionado
  },
  closeIcon: {
    alignSelf: 'flex-start',
    marginLeft: 10, // Ajuste de margen para mejor alineación
  },
  totalPrice: {
    marginTop: 10,
  },
})
