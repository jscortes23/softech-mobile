import { Pressable, StyleSheet } from 'react-native'

import { StyledText } from './StyledText'
import { colors, fontSize } from '../config/themes/appThemes'

interface ButtonPrimaryProps {
  onPress?: () => void
  text?: string
  icon?: React.ReactNode
  variant: 'primary' | 'secondary' | 'alternative'
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = (props) => {
  const { icon, onPress, text, variant } = props

  const type =
    variant === 'primary'
      ? styles.primary
      : variant === 'secondary'
        ? styles.secondary
        : styles.alternative

  return (
    <Pressable onPress={onPress} style={[styles.container, styles.shadowProp, type]}>
      {icon}
      {text && <StyledText style={{ color: type.color }}>{text}</StyledText>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    columnGap: 10,
    flexDirection: 'row',
    fontSize: fontSize.body1,
    justifyContent: 'center',
    paddingVertical: 15,
  },
  shadowProp: {
    elevation: 5,
    shadowColor: "rgba('51','102','204','0.2')",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  primary: {
    backgroundColor: colors.blueBase,
    color: colors.white,
  },
  secondary: {
    backgroundColor: colors.brand10,
    color: colors.black,
  },
  alternative: {
    backgroundColor: colors.white,
    borderColor: colors.blueBase,
    borderWidth: 1,
    color: colors.blueBase,
  },
})
