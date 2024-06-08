import { StyleSheet, Pressable, Text, ViewStyle } from 'react-native'

import { ChevronDownIcon } from './icons/Icons'
import { colors } from '../config/themes/appThemes'

interface ButtonActionProps {
  text: string
  icon?: React.ReactNode
  style?: ViewStyle
}

export const ButtonAction: React.FC<ButtonActionProps> = (props) => {
  const { text, icon, style } = props

  return (
    <Pressable style={[styles.button, style]}>
      <Text style={styles.text}>{text}</Text>
      {icon ?? <ChevronDownIcon width={24} height={24} color={colors.black} />}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.neutralBase,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: colors.black,
  },
})
