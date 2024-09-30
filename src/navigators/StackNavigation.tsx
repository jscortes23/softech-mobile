import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

// Screens
import { CartScreen } from '../screens/CartScreen'
import { CategoriesScreen } from '../screens/CategoriesScreen'
import { FilteredCategoryScreen } from '../screens/FilteredCategoryScreen'
import { FiltersScreen } from '../screens/FiltersScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { LoginScreen } from '../screens/LoginScreen'
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen'
import { ProductsScreen } from '../screens/ProductsScreen'
import { RegisterScreen } from '../screens/RegisterScreen'

export type StackParamList = {
  Home: undefined
  Categories: undefined
  Search: undefined
  Products: undefined
  Filters: undefined
  FilteredCategory: undefined
  ProductDetails: undefined
  Cart: undefined
  Login: undefined
  Register: undefined
}

const Stack = createStackNavigator<StackParamList>()

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
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

export const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
