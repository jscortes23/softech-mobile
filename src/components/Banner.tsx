import { View, StyleSheet, Image, Linking } from 'react-native'

import { ButtonPrimary } from './ButtonPrimary'
import { StyledText } from './StyledText'
import { colors } from '../config/themes/appThemes'

interface BannerProps {
  title: string
  subtitle: string
  description: string
  imageUrl: string
  link: string
}

export const Banner: React.FC<BannerProps> = (props) => {
  const { title, subtitle, description, imageUrl, link } = props
  const handlePress = () => {
    Linking.openURL(link)
  }
  return (
    <View style={styles.container}>
      <StyledText subtitle1 neutral40 center>
        {title}
      </StyledText>
      <StyledText largeTitle white center>
        {subtitle}
      </StyledText>
      <StyledText body1 white center style={styles.description}>
        {description}
      </StyledText>
      <ButtonPrimary onPress={handlePress} text="Shop Now" variant="primary" />
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 20,
    backgroundColor: colors.neutral100,
    rowGap: 32,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  description: {
    lineHeight: 20,
  },
})
