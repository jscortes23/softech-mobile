import { Ionicons } from '@expo/vector-icons'
import React, { useRef } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'

import { CategoryCard } from './src/components/CategoryCard'
import { BellIcon, EyeIcon, TagIcon } from './src/components/icons/Icons'

const data = [
  { categoryName: 'Phones', iconName: 'ios-phone-portrait' },
  { categoryName: 'Tablets', iconName: 'ios-tablet-portrait' },
  { categoryName: 'Printers', iconName: 'ios-print' },
  { categoryName: 'Cameras', iconName: 'ios-camera' },
]

const extraData = [
  { categoryName: 'Smartwatches', iconName: 'ios-watch' },
  { categoryName: 'Printers', iconName: 'ios-print' },
  { categoryName: 'Smart TVs', iconName: 'ios-tv' },
  { categoryName: 'Laptops', iconName: 'ios-laptop' },
]

const extraData2 = [
  { categoryName: 'Headphones', iconName: 'ios-headset' },
  { categoryName: 'Keyboards', iconName: 'ios-keypad' },
  { categoryName: 'Mice', iconName: 'ios-bluetooth' },
  { categoryName: 'Storage', iconName: 'ios-cloud-circle' },
  { categoryName: 'Computers', iconName: 'ios-desktop' },
  { categoryName: 'Gaming', iconName: 'ios-game-controller' },
]

const App = () => {
  const scrollViewRef = useRef<ScrollView>(null)
  const extraScrollViewRef = useRef<ScrollView>(null)
  const extraScrollViewRef2 = useRef<ScrollView>(null)

  const handleBackButtonPress = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, animated: true })
    }
    if (extraScrollViewRef.current) {
      extraScrollViewRef.current.scrollTo({ x: 0, animated: true })
    }
    if (extraScrollViewRef2.current) {
      extraScrollViewRef2.current.scrollTo({ x: 0, animated: true })
    }
  }

  const handleForwardButtonPress = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true })
    }
    if (extraScrollViewRef.current) {
      extraScrollViewRef.current.scrollToEnd({ animated: true })
    }
    if (extraScrollViewRef2.current) {
      extraScrollViewRef2.current.scrollToEnd({ animated: true })
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Browse By Category</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleBackButtonPress} style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleForwardButtonPress} style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
              <Ionicons name="chevron-forward-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.gridContainer}>
          {data.map((item, index) => (
            <CategoryCard
              key={index}
              icon={renderIcon(item.iconName)}
              name={item.categoryName}
              onPress={() => {}}
            />
          ))}
        </View>
      </ScrollView>

      <ScrollView
        horizontal
        ref={extraScrollViewRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.extraScrollContainer}>
        <View style={styles.gridContainer}>
          {extraData.map((item, index) => (
            <CategoryCard
              key={index}
              icon={renderIcon(item.iconName)}
              name={item.categoryName}
              onPress={() => {}}
            />
          ))}
        </View>
      </ScrollView>

      <ScrollView
        horizontal
        ref={extraScrollViewRef2}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.extraScrollContainer}>
        <View style={styles.gridContainer}>
          {extraData2.map((item, index) => (
            <CategoryCard
              key={index}
              icon={renderIcon(item.iconName)}
              name={item.categoryName}
              onPress={() => {}}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 8,
  },
  iconWrapper: {
    padding: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  extraScrollContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default App
