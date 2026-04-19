import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from "expo-router";

export default function secondTermResult() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity style={styles.homeContainer} onPress={() => {
        router.push('/resultStudent');
      }}>
        <Image
          source={require("../assets/images/Exam (1).png")}
          style={styles.roleIcon}
          resizeMode="contain"
        />
        <Text style={styles.hometext}>RESULT</Text>
      </TouchableOpacity>

      <View style={styles.class}>
        <Text style={styles.text}>Term: Second</Text>
        <Text style={styles.text}>Date: 12/12/2024</Text>
      </View>

      <Text style={styles.descriptionText}>Description</Text>
      <Text style={styles.text1}>The standard Lorem Ipsum passage.{'\n'}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? </Text>

      <View style={{ paddingTop: 50, alignSelf: "center", }}>
        <View style={styles.box}></View>
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.resultText}>Download your result</Text>
      </TouchableOpacity>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#0B55D1",
    width: '100%',
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  hometext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  roleIcon: {
    width: 38,
    height: 38,
  },
  class: {
    backgroundColor: "#1591EA",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  box: {
    width: 350,
    height: 200,
    backgroundColor: '#C4C4C4',
  },
  buttonContainer: {
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: 'blue',
    height: 51.67,
    width: 330,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    color: "white",
    fontSize: 16,
    padding: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginLeft: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  text1: {
    fontSize: 14,
    marginLeft: 25,
    marginRight: 25,
  }
})