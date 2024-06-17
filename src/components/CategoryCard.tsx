import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { StyledText } from './StyledText'

interface CategoryCardProps {
  onPress?: () => void
  icon: React.ReactNode
  name: string
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ onPress, icon, name }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.iconContainer}>{icon}</View>
      <StyledText center black>
        {name}
      </StyledText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 141,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 100,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#F4F8FA',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    marginBottom: 10,
  },
})

export default CategoryCard
