import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { StyledText } from './StyledText'
import { colors } from '../config/themes/appThemes'

interface CategoryCardProps {
  onPress?: () => void
  icon: React.ReactNode
  name: string
}

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  const { onPress, icon, name } = props
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>{icon}</View>
      <StyledText center black>
        {name}
      </StyledText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 8,
    paddingVertical: 24,
    borderRadius: 8,
    backgroundColor: colors.neutral10,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 2,
  },
})
