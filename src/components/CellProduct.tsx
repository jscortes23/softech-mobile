import React from 'react'
import { View, StyleSheet } from 'react-native'

import { StyledText } from './StyledText'
import { ProductIcon } from './icons/Icons'
import { colors } from '../config/themes/appThemes'

interface CellProductProps {
  name: string
  numberSales: number
  price: number
}

const CellProduct: React.FC<CellProductProps> = (props) => {
  const { name, numberSales, price } = props

  return (
    <View style={[styles.container, styles.shadow]}>
      <ProductIcon width={80} height={80} color={colors.redBase} />
      <View style={styles.content}>
        <StyledText body2 neutral100>
          {name}
        </StyledText>
        <StyledText body2 neutral100>
          ${price} ∙ {numberSales} ventas
        </StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 17,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#BBCAD2',
    borderTopWidth: 0,
  },
  content: {
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: 12,
  },
  shadow: {
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 5,
  },
})

export default CellProduct
