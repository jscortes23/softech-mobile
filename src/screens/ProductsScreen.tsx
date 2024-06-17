import { ScrollView, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { ButtonAction } from '../components/ButtonAction'
import { ContainerMain } from '../components/ContainerMain'
import { GridView } from '../components/GridView'
import { ResultProduct } from '../components/ResultProduct'
import { StyledText } from '../components/StyledText'
import { ChevronDownIcon, SettingsIcon } from '../components/icons/Icons'
import { colors } from '../config/themes/appThemes'
import { StackParamList } from '../navigators/StackNavigation'

const products = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/25643365/pexels-photo-25643365/free-photo-of-madera-gente-animal-perro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: 'Product Design Handbook',
    price: 30.0,
    numberSales: 88,
  },
  {
    id: '2',
    image:
      'https://images.pexels.com/photos/19936040/pexels-photo-19936040/free-photo-of-puesta-de-sol-mujer-campo-en-pie.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: 'Website UI Kit',
    price: 8.0,
    numberSales: 68,
  },
  {
    id: '3',
    image: 'https://www.pexels.com/es-es/foto/ligero-edificio-construccion-jardin-21404295/',
    name: 'Icon UI Kit',
    price: 8.0,
    numberSales: 53,
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/23017583/pexels-photo-23017583/free-photo-of-mujer-campo-verano-arboles.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: 'E-commerce Web Template',
    price: 10.0,
    numberSales: 48,
  },
  {
    id: '5',
    image:
      'https://images.pexels.com/photos/25929109/pexels-photo-25929109/free-photo-of-madera-pajaro-animal-hoja.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: 'Wireframing Kit',
    price: 8.0,
    numberSales: 51,
  },
]

type ProductsProps = NativeStackScreenProps<StackParamList, 'Products'>

export const ProductsScreen: React.FC<ProductsProps> = (props) => {
  const { navigation } = props

  return (
    <ContainerMain backgroundColor={colors.white}>
      <View style={styles.buttonAction}>
        <ButtonAction
          text="Filters"
          icon={<SettingsIcon height={18} width={16} />}
          onPress={() => navigation.navigate('Filters')}
        />
        <ButtonAction text="By rating" icon={<ChevronDownIcon height={18} width={16} />} />
      </View>
      <View style={styles.searchQuantity}>
        <StyledText neutralBase subtitle1>
          Products Result:
        </StyledText>
        <StyledText black title2>
          85
        </StyledText>
      </View>
      {/* Solucion temporal al renderizado de la ultima fila del componente */}
      <ScrollView contentContainerStyle={{ paddingBottom: 180 }}>
        <GridView
          data={products}
          RenderItem={(item) => (
            <ResultProduct
              productName={item.name}
              productImage={item.image}
              productPrice={item.price}
              onBuyNow={() => navigation.navigate('ProductDetails')}
            />
          )}
        />
      </ScrollView>
    </ContainerMain>
  )
}

const styles = StyleSheet.create({
  buttonAction: {
    paddingTop: 40,
    marginHorizontal: 8,
    columnGap: 16,
    flexDirection: 'row',
  },
  searchQuantity: {
    marginHorizontal: 8,
    marginVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
})
