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
    columnGap: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral40,
  },
  content: {
    alignItems: 'flex-start',
    flex: 1,
    rowGap: 8,
  },
  shadow: {
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 5,
  },
})
