import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    TextLogo:{
        color:"yellow",
        fontSize:60
    }
})