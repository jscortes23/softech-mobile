import { StyleSheet, View } from 'react-native'

import { StyledText } from './StyledText'
import { BgLinear } from './backgrounds/BgLinear'

interface CardHighlightProps {
  title: string
  quantity: number
  color: string[]
}

export const CardHighlight: React.FC<CardHighlightProps> = (props) => {
  const { quantity, title, color } = props

  return (
    <BgLinear style={styles.border} color={color} start={{ x: 0.14, y: 0 }} end={{ x: 1, y: 0 }}>
      <View style={styles.container}>
        <StyledText white largeTitle>
          {quantity}
        </StyledText>
        <StyledText white subtitle1>
          {title}
        </StyledText>
      </View>
    </BgLinear>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: 'flex-start',
    rowGap: 8,
    overflow: 'hidden',
  },
  border: {
    borderRadius: 8,
  },
})
