import { FlatList, StyleSheet, ScrollView, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { CardProduct } from '../components/CardProduct'
import { ContainerMain } from '../components/ContainerMain'
import { OrderSummary } from '../components/OrderSummary'
import { StyledText } from '../components/StyledText'
import { colors } from '../config/themes/appThemes'
import { StackParamList } from '../navigators/StackNavigation'

const products = [
  {
    id: '1',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    price: 1399,
    src: 'https://i5.walmartimages.com/seo/AT-T-XGODY-Cheap-Android-Phones-Unlocked-Cell-Phones-4000mAh-6-3-T-mobile-Unlocked-Phones_b5bc8f0c-bdf5-43b8-b507-8b5353a20d51.ab73e73c3f986aef10112ac0c1a95e3c.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
  },
  {
    id: '2',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    price: 1399,
    src: 'https://i5.walmartimages.com/seo/AT-T-XGODY-Cheap-Android-Phones-Unlocked-Cell-Phones-4000mAh-6-3-T-mobile-Unlocked-Phones_b5bc8f0c-bdf5-43b8-b507-8b5353a20d51.ab73e73c3f986aef10112ac0c1a95e3c.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
  },
  {
    id: '3',
    name: 'Apple iPhone 14 Pro Max 128Gb Deep Purple',
    price: 1399,
    src: 'https://i5.walmartimages.com/seo/AT-T-XGODY-Cheap-Android-Phones-Unlocked-Cell-Phones-4000mAh-6-3-T-mobile-Unlocked-Phones_b5bc8f0c-bdf5-43b8-b507-8b5353a20d51.ab73e73c3f986aef10112ac0c1a95e3c.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
  },
]

type CartScreenProps = NativeStackScreenProps<StackParamList, 'Cart'>

export const CartScreen: React.FC<CartScreenProps> = (props) => {
  const prices = products.map((product) => product.price)

  const renderProduct = (item: { id: any; name: any; price: any; src: any }) => (
    <CardProduct key={item.id} imageUrl={item.src} name={item.name} price={item.price} />
  )

  const renderSeparator = () => <View style={styles.separator} />

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ContainerMain>
        <StyledText title2 style={styles.title}>
          Shopping Cart
        </StyledText>
        <FlatList
          scrollEnabled={false}
          data={products}
          renderItem={({ item }) => renderProduct(item)}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
        <OrderSummary iva={21} discountPercentage={10} prices={prices} />
      </ContainerMain>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    marginBottom: 20,
  },
  scrollContainer: {
    backgroundColor: colors.white,
    paddingBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: colors.neutral40,
  },
})
