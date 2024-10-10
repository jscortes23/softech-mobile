import { StyleSheet, View } from 'react-native'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { ContainerMain } from '../components/ContainerMain'
import { DetailsProduct } from '../components/DetailsProduct'
import { ImageGallery } from '../components/ImageGallery'
import { StyledText } from '../components/StyledText'

const imagenes = [
  {
    id: 1,
    src: 'https://prints.ultracoloringpages.com/4d4e53262cd35c980ad27cdb71c14b4c.png',
  },
  {
    id: 2,
    src: 'https://prints.ultracoloringpages.com/4d4e53262cd35c980ad27cdb71c14b4c.png',
  },
  {
    id: 3,
    src: 'https://prints.ultracoloringpages.com/4d4e53262cd35c980ad27cdb71c14b4c.png',
  },
  {
    id: 4,
    src: 'https://prints.ultracoloringpages.com/4d4e53262cd35c980ad27cdb71c14b4c.png',
  },
]

export const ProductDetailsScreen: React.FC = () => {
  return (
    <ContainerMain flex={1}>
      <ImageGallery images={imagenes} />
      <View style={styles.container}>
        <StyledText title1 black bold>
          Apple iPhone 14 Pro Max
        </StyledText>
        <View style={styles.buttonAction}>
          <StyledText subtitle1 black bold>
            $1399
          </StyledText>
        </View>

        <StyledText subtitle2 blue40 bold>
          Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without
          rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the
          new systemwith two cameras more...
        </StyledText>
        <View style={styles.button}>
          <ButtonPrimary variant="alternative" text="Add to Shopping Cart" />
        </View>
        <View>
          <ButtonPrimary variant="primary" text="Buy" />
        </View>
      </View>
      <View style={styles.space}>
        <DetailsProduct
          category="catel"
          description="ajdjjajajajjajajjajajhdhbed"
          dimensions="23"
          weight="20"
          brand="motorola"
        />
      </View>
    </ContainerMain>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 52,
  },
  space: {
    marginVertical: 24,
  },
  buttonAction: {
    marginVertical: 24,
  },
  button: {
    marginVertical: 32,
  },
  button2: {
    marginVertical: 16,
  },
})
