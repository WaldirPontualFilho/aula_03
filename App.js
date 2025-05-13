import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer> 
  )
}

export default App