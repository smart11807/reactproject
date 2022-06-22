import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo' 
import StyleSheet from './components/styles'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,styles.warning]}>Hello react native</Text>
      <Logo></Logo>

    </View>
  )
}

export default App