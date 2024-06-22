import { Ionicons } from '@expo/vector-icons'
import React, { useRef, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

import { CategoryCard } from '../components/CategoryCard'
import { ContainerMain } from '../components/ContainerMain'
import { StyledText } from '../components/StyledText'
import { BellIcon, EyeIcon, TagIcon } from '../components/icons/Icons'
import { colors } from '../config/themes/appThemes'
import { StackParamList } from '../navigators/StackNavigation'

const data = [
  { categoryName: 'Phones', iconName: 'ios-phone-portrait' },
  { categoryName: 'Tablets', iconName: 'ios-tablet-portrait' },
  { categoryName: 'Printers', iconName: 'ios-print' },
  { categoryName: 'Cameras', iconName: 'ios-camera' },
  { categoryName: 'Smartwatches', iconName: 'ios-watch' },
  { categoryName: 'Printers', iconName: 'ios-print' },
  { categoryName: 'Smart TVs', iconName: 'ios-tv' },
  { categoryName: 'XXXXX', iconName: 'ios-laptop' },
  { categoryName: 'Headphones', iconName: 'ios-headset' },
  { categoryName: 'Keyboards', iconName: 'ios-keypad' },
  { categoryName: 'Mice', iconName: 'ios-bluetooth' },
  { categoryName: 'Storage', iconName: 'ios-cloud-circle' },
  { categoryName: 'Computers', iconName: 'ios-desktop' },
  { categoryName: 'Gaming', iconName: 'ios-game-controller' },
  { categoryName: 'Headphones', iconName: 'ios-headset' },
  { categoryName: 'Keyboards', iconName: 'ios-keypad' },
  { categoryName: 'Mice', iconName: 'ios-bluetooth' },
  { categoryName: 'Storage', iconName: 'ios-cloud-circle' },
  { categoryName: 'Computers', iconName: 'ios-desktop' },
  { categoryName: 'FFFFFF', iconName: 'ios-game-controller' },
]

type CategoriesScreenProps = NativeStackScreenProps<StackParamList, 'Categories'>

export const CategoriesScreen: React.FC<CategoriesScreenProps> = (props) => {
  const { navigation } = props
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

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ios-phone-portrait':
        return <BellIcon width={40} height={40} color="black" />
      case 'ios-watch':
        return <EyeIcon width={40} height={40} color="black" />
      default:
        return <TagIcon width={35} height={32} color="black" />
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
          {data.map((item, index) => (
            <CategoryCard key={index} icon={renderIcon(item.iconName)} name={item.categoryName} />
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
