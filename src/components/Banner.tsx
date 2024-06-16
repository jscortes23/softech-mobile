import { View, StyleSheet, Image } from 'react-native'

import { ButtonPrimary } from './ButtonPrimary'
import { ContainerMain } from './ContainerMain'
import { StyledText } from './StyledText'
import { colors } from '../config/themes/appThemes'

interface BannerProps {
  title: string
  subtitle: string
  description: string
  imageUrl: string
  onPress?: () => void
}

export const Banner: React.FC<BannerProps> = (props) => {
  const { title, subtitle, description, imageUrl, onPress } = props

  const word = title.split(' ')
  const lastWord = word.pop()
  const newTitle = word.join(' ')

  return (
    <ContainerMain backgroundColor={colors.neutral100}>
      <View style={styles.container}>
        <View>
          <StyledText title1 neutral40 center bold style={{ opacity: 0.4 }}>
            {subtitle}
          </StyledText>
          <StyledText largeTitle white center style={{ fontWeight: '100' }}>
            {newTitle}{' '}
            <StyledText white bold>
              {lastWord}
            </StyledText>
          </StyledText>
          <StyledText subtitle1 white center>
            {description}
          </StyledText>
        </View>
        <ButtonPrimary onPress={onPress} text="Shop Now" variant="primary" />
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
    </ContainerMain>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 88,
    rowGap: 48,
  },
  image: {
    height: 290,
    resizeMode: 'cover',
  },
})
