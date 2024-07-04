import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { CategoriesStack, HomeStack, SearchStack, UserStack } from './StackNavigation'
import { colors } from '../config/themes/appThemes'
// Screens
import { CartScreen } from '../screens/CartScreen'
import { LoginScreen } from '../screens/LoginScreen'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.white, height: 70 },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoriesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="grid-view" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialComunity name="cart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
