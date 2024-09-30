import { Ionicons } from '@expo/vector-icons'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Fontisto from '@expo/vector-icons/Fontisto'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { CategoryCard } from '../components/CategoryCard'
import { ContainerMain } from '../components/ContainerMain'
import { StyledText } from '../components/StyledText'
import { colors } from '../config/themes/appThemes'
import { CategoryType } from '../models/Category'
import { StackParamList } from '../navigators/StackNavigation'
import { getAllCategories } from '../services/getAllCategories'

const icons = {
  0: <Feather name="cpu" size={24} color="black" />,
  1: <Fontisto name="photograph" size={24} color="black" />,
  2: <FontAwesome5 name="memory" size={24} color="black" />,
  3: <Feather name="hard-drive" size={24} color="black" />,
  4: <MaterialCommunityIcons name="harddisk" size={24} color="black" />,
  5: <Fontisto name="flipboard" size={24} color="black" />,
  6: <MaterialIcons name="screenshot-monitor" size={24} color="black" />,
  7: <MaterialIcons name="power" size={24} color="black" />,
  8: <FontAwesome5 name="mouse" size={24} color="black" />,
  9: <MaterialCommunityIcons name="view-gallery-outline" size={24} color="black" />,
}

type CategoriesScreenProps = NativeStackScreenProps<StackParamList, 'Categories'>

export const CategoriesScreen: React.FC<CategoriesScreenProps> = (props) => {
  const { navigation } = props
  const [category, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data))
  }, [])

  const scrollViewRef = useRef<ScrollView>(null)
  const [scrollX, setScrollX] = useState(0)
  const COLUMN_WIDTH = 100

  const handleBackButtonPress = () => {
    if (scrollViewRef.current) {
      const newX = Math.max(0, scrollX - COLUMN_WIDTH)
      scrollViewRef.current.scrollTo({ x: newX, animated: true })
      setScrollX(newX)
    }
  }

  const handleForwardButtonPress = () => {
    if (scrollViewRef.current) {
      const newX = scrollX + COLUMN_WIDTH
      scrollViewRef.current.scrollTo({ x: newX, animated: true })
      setScrollX(newX)
    }
  }

  return (
    <ContainerMain flex={1} backgroundColor={colors.white}>
      <View style={styles.header}>
        <StyledText title2 bold>
          Browse By Category
        </StyledText>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleBackButtonPress}>
            <Ionicons name="chevron-back-outline" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForwardButtonPress}>
            <Ionicons name="chevron-forward-outline" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal ref={scrollViewRef}>
        <View style={styles.gridContainer}>
          {category.map((item, index) => (
            <CategoryCard
              key={index}
              icon={(icons as any)[index]}
              name={item.nombre_categoria}
              onPress={() => navigation.navigate('Products', { idCategory: item.id_categoria })}
            />
          ))}
        </View>
      </ScrollView>
    </ContainerMain>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerIcons: {
    flexDirection: 'row',
    columnGap: 10,
  },
  gridContainer: {
    flex: 1,
    flexWrap: 'wrap',
    gap: 20,
    marginHorizontal: 4,
  },
})
