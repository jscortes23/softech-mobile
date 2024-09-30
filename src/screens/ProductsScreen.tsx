import { useEffect, useState } from 'react'
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
import { getAllProducts } from '../services/getAllProducts'
import { Product } from '../types/Product'

type ProductsProps = NativeStackScreenProps<StackParamList, 'Products'>

export const ProductsScreen: React.FC<ProductsProps> = (props) => {
  const { navigation } = props
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data))
  }, [])

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
          {products.length}
        </StyledText>
      </View>
      {/* Solucion temporal al renderizado de la ultima fila del componente */}
      <ScrollView contentContainerStyle={{ paddingBottom: 180 }}>
        <GridView
          data={products}
          RenderItem={(item) => (
            <ResultProduct
              productName={item.descripcion_producto}
              productImage={item.imagen_miniatura_producto}
              productPrice={Number(item.valor_unitario)}
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
