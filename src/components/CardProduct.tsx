import React, { useState } from 'react'
import { View, Image, StyleSheet, Pressable } from 'react-native'

import { StyledText } from './StyledText'
import { MinusIcon, PlusIcon } from './icons/Icons'
import { colors } from '../config/themes/appThemes'

interface CardProductProps {
  onChange?: (value: number) => void
  price: number
  imageUrl: string
  name: string
  onDelete?: () => void
}

export const CardProduct: React.FC<CardProductProps> = (props) => {
  const { imageUrl, name, price, onChange, onDelete } = props
  const [quantity, setQuantity] = useState<number>(0)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    setQuantity(quantity > 0 ? quantity - 1 : 0)
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <StyledText body1 bold>
          {name}
        </StyledText>
        <View style={styles.quantitySelector}>
          <View style={styles.containerQuantity}>
            <Pressable onPress={decrementQuantity}>
              <MinusIcon width={24} height={24} color={colors.black} />
            </Pressable>
            <StyledText body1 bold style={styles.quantityText}>
              {quantity}
            </StyledText>
            <Pressable onPress={incrementQuantity}>
              <PlusIcon width={24} height={24} color={colors.black} />
            </Pressable>
          </View>
          <StyledText subtitle1 bold>
            ${price}
          </StyledText>
        </View>
      </View>
      <Pressable onPress={onDelete} style={styles.closeIcon}>
        <StyledText title2>X</StyledText>
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
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
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
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: colors.neutral40,
    borderWidth: 1,
    borderRadius: 4,
  },
  closeIcon: {
    alignSelf: 'flex-start',
  },
})
