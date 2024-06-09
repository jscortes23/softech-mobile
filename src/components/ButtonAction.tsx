import { StyleSheet, Pressable } from 'react-native'

import { StyledText } from './StyledText'
import { colors } from '../config/themes/appThemes'

interface ButtonActionProps {
  text: string
  icon?: React.ReactNode
  onPress?: () => void
}

export const ButtonAction: React.FC<ButtonActionProps> = (props) => {
  const { text, icon, onPress } = props

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <StyledText body1 black>
        {text}
      </StyledText>
      {icon}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 1,
    borderColor: colors.neutral40,
    borderRadius: 8,
  },
})
