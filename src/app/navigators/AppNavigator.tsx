import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../features/main/screens/HomeScreen'
import DetailScreen from '../features/main/screens/DetailScreen'
import WatchlistScreen from '../features/main/screens/WatchlistScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
)

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home', headerShown: false }} />
        <Tab.Screen name="Watchlist" component={WatchlistScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator