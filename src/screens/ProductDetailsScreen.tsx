import { StyleSheet, View } from 'react-native'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { ContainerMain } from '../components/ContainerMain'
import { DetailsProduct } from '../components/DetailsProduct'
import { ImageGallery } from '../components/ImageGallery'
import { StyledText } from '../components/StyledText'

const imagenes = [
  {
    id: 1,
    src: 'https://www.shutterstock.com/image-vector/3d-high-quality-vector-mobile-600nw-2121419597.jpg',
  },
  {
    id: 2,
    src: 'https://motorolaus.vtexassets.com/arquivos/ids/162813/thinkphone-pdp-ecom-render-5-carbon-black-qq6n0fna.png?v=638084623680430000?w=1080&q=75',
  },
  {
    id: 3,
    src: 'https://i5.walmartimages.com/seo/AT-T-XGODY-Cheap-Android-Phones-Unlocked-Cell-Phones-4000mAh-6-3-T-mobile-Unlocked-Phones_b5bc8f0c-bdf5-43b8-b507-8b5353a20d51.ab73e73c3f986aef10112ac0c1a95e3c.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
  },
  {
    id: 4,
    src: 'https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB-300x300.png',
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
