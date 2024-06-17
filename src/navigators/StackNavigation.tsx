import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

// Screens
import { CategoriesScreen } from '../screens/CategoriesScreen'
import { FilteredCategoryScreen } from '../screens/FilteredCategoryScreen'
import { FiltersScreen } from '../screens/FiltersScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen'
import { ProductsScreen } from '../screens/ProductsScreen'

export type StackParamList = {
  Home: undefined
  Categories: undefined
  Search: undefined
  Products: undefined
  Filters: undefined
  FilteredCategory: undefined
  ProductDetails: undefined
}

const Stack = createStackNavigator<StackParamList>()

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  )
}

export const CategoriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="FilteredCategory" component={FilteredCategoryScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  )
}

export const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Filters" component={FiltersScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  )
}
