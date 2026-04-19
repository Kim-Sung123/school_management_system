import { StyleSheet, View, Image, Text, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width } = Dimensions.get("window")

export default function Screen() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Top curved shape */}
      <View style={styles.topShape} />

      {/* Content */}
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // ✅ FIXED CURVE
  topShape: {
    position: "absolute",
    top: -250,
    left: -250,
    width: width * 1.1,
    height: width * 1.1,
    backgroundColor: "#2EC4A6",
    borderRadius: width,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // ✅ BETTER LOGO SIZE
  logo: {
    width: 220,
    height: 220,
    marginBottom: 10,
  },

})