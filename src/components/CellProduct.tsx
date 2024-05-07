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

export const CellProduct: React.FC<CellProductProps> = (props) => {
  const { name, numberSales, price } = props

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.icon}>
          <ProductIcon width={90} height={90} color={colors.redBase} />
        </View>
        <StyledText style={styles.productName} body2 neutral100>
          {name}
        </StyledText>
      </View>
      <View style={styles.rowContainer}>
        <StyledText style={styles.price} body2 neutral100>
          $ {price}
        </StyledText>
        <StyledText style={styles.dot} body2 neutral100>
          .
        </StyledText>
        <StyledText style={styles.sales} body2 neutral100>
          {numberSales} ventas
        </StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  productName: {
    fontSize: 30,
    marginTop: -50,
  },
  price: {
    fontSize: 40,
    marginLeft: 100,
    marginTop: -50,
  },
  dot: {
    fontSize: 40,
    marginHorizontal: 5,
    marginTop: -50,
  },
  sales: {
    fontSize: 40,
    marginTop: -50,
  },
})

export default CellProduct
