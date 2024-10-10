import { View, StyleSheet } from 'react-native'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { StyledText } from '../components/StyledText'
import { colors } from '../config/themes/appThemes'
import { formatPrice } from '../utils/formatPrice'
import { useContext } from 'react'
import { AuthContext } from '../context/useAuth'

interface OrderSummaryProps {
  iva: number
  discountPercentage?: number
  totalPrice: number
  onPress?: () => void
}

export const OrderSummary: React.FC<OrderSummaryProps> = (props) => {
  const { iva, discountPercentage = 0, totalPrice, onPress } = props
  const discount = (totalPrice * discountPercentage) / 100
  const ivaCalculated = (totalPrice - discount) * (iva / 100)
  const finalTotal = totalPrice - discount + ivaCalculated
  const { token } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <StyledText subtitle1 bold>
        Order Summary
      </StyledText>
      <View style={styles.content}>
        <View style={styles.row}>
          <StyledText body1 neutral80>
            Porcentaje de descuento
          </StyledText>
          <StyledText body1 bold>
            {discountPercentage}%
          </StyledText>
        </View>
        <View style={styles.row}>
          <StyledText body1 neutral80>
            Descuento
          </StyledText>
          <StyledText body1 bold>
            {formatPrice(discount)}
          </StyledText>
        </View>
        <View style={styles.row}>
          <StyledText body1 neutral80>
            IVA
          </StyledText>
          <StyledText body1 bold>
            {iva}%
          </StyledText>
        </View>
        <View style={styles.row}>
          <StyledText body1 bold>
            Subtotal
          </StyledText>
          <StyledText body1 bold>
            {formatPrice(totalPrice)}
          </StyledText>
        </View>
        <View style={styles.row}>
          <StyledText body1 bold>
            Total
          </StyledText>
          <StyledText body1 bold>
            {formatPrice(finalTotal)}
          </StyledText>
        </View>
      </View>
      {token ? (
        <ButtonPrimary variant="primary" text="Checkout" onPress={onPress} />
      ) : (
        <></>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 56,
    paddingHorizontal: 16,
    borderWidth: 0.5,
    borderColor: colors.neutral40,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  content: {
    rowGap: 16,
    marginTop: 40,
    marginBottom: 46,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
