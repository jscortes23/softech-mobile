import { Pressable, StyleSheet } from 'react-native'

import { StyledText } from './StyledText'
import { colors, fontSize } from '../config/themes/appThemes'

interface ButtonPrimaryProps {
  onPress: () => void
  text?: string
  icon?: React.ReactNode
  variant: 'primary' | 'secondary'
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = (props) => {
  const { icon, onPress, text, variant } = props

  const type = variant === 'primary' ? styles.primary : styles.secondary

  return (
    <Pressable onPress={onPress} style={[styles.container, styles.shadowProp, type]}>
      {icon}
      {text && <StyledText style={type}>{text}</StyledText>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },
  shadowProp: {
    shadowColor: "rgba('51','102','204','0.2')",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  primary: {
    backgroundColor: colors.blueBase,
    color: colors.white,
    fontSize: fontSize.subtitle1,
  },
  secondary: {
    backgroundColor: colors.brand10,
    color: colors.black,
    fontSize: fontSize.subtitle2,
  },
})
