import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react'

// Screens
import { AuthContext } from '../context/useAuth'
import { CartScreen } from '../screens/CartScreen'
import { CategoriesScreen } from '../screens/CategoriesScreen'
import { FilteredCategoryScreen } from '../screens/FilteredCategoryScreen'
import { FiltersScreen } from '../screens/FiltersScreen'
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { LoginScreen } from '../screens/LoginScreen'
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen'
import { ProductsScreen } from '../screens/ProductsScreen'
import { RegisterScreen } from '../screens/RegisterScreen'
import { UserScreen } from '../screens/UserScreen'
import { PaymentScreen } from '../screens/PaymentScreen'

export type StackParamList = {
  Home: undefined
  Categories: undefined
  Search: undefined
  Products: { idCategory?: number; idBrand?: number | null }
  Filters: undefined
  FilteredCategory: undefined
  ProductDetails: { idProduct: number }
  Cart: undefined
  Login: undefined
  Register: undefined
  ForgotPassword: undefined
  UserData: undefined
  Payment: { totalUSD?: number }
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
  const { token } = useContext(AuthContext)
  return (
    <Stack.Navigator>
      {token ? (
        <Stack.Screen name="UserData" component={UserScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

export const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Payment' component={PaymentScreen} />
    </Stack.Navigator>
  )
}
