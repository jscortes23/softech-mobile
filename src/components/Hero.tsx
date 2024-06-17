import { View, StyleSheet, Image } from 'react-native'

import { StyledText } from '../components/StyledText'
import { colors } from '../config/themes/appThemes'

interface HeroProps {
  image: string
  title: string
  description: string
  text?: string
  variant: 'primary' | 'secondary'
  children?: React.ReactNode
}

export const Hero: React.FC<HeroProps> = (props) => {
  const { image, title, description, variant, children } = props
  const word = title.split(' ')
  const lastWord = word.pop()
  const newTitle = word.join(' ')

  const type = {
    primary: styles.primary,
    secondary: styles.secondary,
  }

  return (
    <View style={[styles.container, type[variant]]}>
      <Image source={{ uri: image }} style={styles.image} />
      <StyledText title2 center style={{ fontWeight: '300', color: type[variant].color }}>
        {newTitle}{' '}
        <StyledText bold style={type[variant]}>
          {lastWord}
        </StyledText>
      </StyledText>
      <StyledText center style={type[variant]}>
        {description}
      </StyledText>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  primary: {
    backgroundColor: colors.neutral100,
    color: colors.white,
  },
  secondary: {
    backgroundColor: colors.white,
    color: colors.black,
  },
})
