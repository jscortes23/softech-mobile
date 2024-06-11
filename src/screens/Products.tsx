import { FlatList, View } from 'react-native'

import { ProductList } from '../components/ProductList'
import { ResultProduct } from '../components/ResultProduct'

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

export const Products: React.FC = () => {
  return (
    <View>
      <ProductList name="Products">
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ResultProduct
              productName={item.name}
              productPrice={item.price}
              productImage={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </ProductList>
    </View>
  )
}
