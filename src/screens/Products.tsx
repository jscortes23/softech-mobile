import { ScrollView, View } from 'react-native'

import { CellProduct } from '../components/CellProduct'
import { ProductList } from '../components/ProductList'

const products = [
  { name: 'Product Design Handbook', price: 30.0, numberSales: 88 },
  { name: 'Website UI Kit', price: 8.0, numberSales: 68 },
  { name: 'Icon UI Kit', price: 8.0, numberSales: 53 },
  { name: 'E-commerce Web Template', price: 10.0, numberSales: 48 },
  { name: 'Wireframing Kit', price: 8.0, numberSales: 51 },
]

export const Products: React.FC = () => {
  return (
    <View>
      <ScrollView>
        <ProductList name="Products">
          {products.map((product, index) => (
            <CellProduct
              key={index}
              name={product.name}
              price={product.price}
              numberSales={product.numberSales}
            />
          ))}
        </ProductList>
      </ScrollView>
    </View>
  )
}
