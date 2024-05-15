import { Pressable } from 'react-native'

import { StyledText } from './StyledText'

interface LinkProps {
  onPress?: () => void
  value: string
  sizeText?: number
}

export const Link: React.FC<LinkProps> = (props) => {
  const { onPress, value, sizeText } = props

  return (
    <Pressable onPress={onPress}>
      <StyledText blueBase style={{ fontSize: sizeText }}>
        {value}
      </StyledText>
    </Pressable>
  )
}
