import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { ButtonPrimary } from '../components/ButtonPrimary'
import { ContainerMain } from '../components/ContainerMain'
import { DetailsProduct } from '../components/DetailsProduct'
import { ImageGallery } from '../components/ImageGallery'
import { StyledText } from '../components/StyledText'
import { ProductType } from '../models/Product'
import { StackParamList } from '../navigators/StackNavigation'
import { getProductById } from '../services/getProductsById'
import { useCart } from '../context/cartContext'

type ProductDetailsProps = NativeStackScreenProps<StackParamList, 'ProductDetails'>

export const ProductDetailsScreen: React.FC<ProductDetailsProps> = (props) => {
  const { route } = props
  const [product, setProduct] = useState<ProductType | null>(null)
  const idProduct = route.params?.idProduct
  const { addToCart } = useCart()

  useEffect(() => {
    if (idProduct) {
      getProductById(idProduct)
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setProduct(data[0]);
          } else {
            console.error('No product data received');
          }
        })
        .catch((error) => {
          console.error('Error fetching product details:', error);
        });
    }
  }, [idProduct]);

  const handleAddToCart = () => {
    addToCart({
      id_producto: product ? product.id_producto : 1,
      descripcion_producto: product?.descripcion_producto,
      valor_unitario: Number(product?.valor_unitario),
      imagen_miniatura_producto: mainImage.src,
    })
  }

  if (!product) {
    return (
      <ContainerMain flex={1}>
        <StyledText subtitle1>Loading product details...</StyledText>
      </ContainerMain>
    )
  }

  // Extraer las imágenes
  const mainImage = {
    id: 0, // Puedes usar un valor único aquí
    src: 'https://prints.ultracoloringpages.com/4d4e53262cd35c980ad27cdb71c14b4c.png',
  }

  // Suponiendo que galeria_imagenes_producto contiene una lista de nombres de imágenes
  const imageGallery = product.galeria_imagenes_producto
  ? product.galeria_imagenes_producto.split(',').map((image, index) => ({
      id: index + 1,
      src: 'https://prints.ultracoloringpages.com/4d4e53262cd35c980ad27cdb71c14b4c.png',
    }))
  : [];

  return (
    <ContainerMain flex={1}>
      <ScrollView>
        <ImageGallery images={[mainImage, ...imageGallery]} />
        <View style={styles.container}>
          <StyledText title1 black bold>
            {product.descripcion_producto}
          </StyledText>
          <View style={styles.buttonAction}>
            <StyledText subtitle1 black bold>
              ${product.valor_unitario}
            </StyledText>
          </View>
          <StyledText subtitle2 blue40 bold>
            {product.descripcion_larga_producto}
          </StyledText>
          <View style={styles.button}>
            <ButtonPrimary variant="alternative" text="Add to Shopping Cart" onPress={handleAddToCart} />
          </View>
        </View>
        <View style={styles.space}>
          <DetailsProduct
            category={product.categoria ? product.categoria.nombre_categoria : 'nada'}
            description={product.descripcion_producto}
            dimensions={`${product.altura_producto} x ${product.anchura_producto}`}
            weight={product.peso_producto}
            brand={product.marca ? product.marca.nombre_marca : 'nada'}
          />
        </View>
      </ScrollView>
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
})