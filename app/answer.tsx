import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function answer() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity style={styles.homeContainer} onPress={() => {
                router.push("/listOfQuestion");
              }}>
        <Image
          source={require("../assets/images/Exam (1).png")}
          style={styles.roleIcon}
          resizeMode="contain"
        />
        <Text style={styles.hometext}>ANSWER</Text>
      </TouchableOpacity>
      <Text style={styles.text1}>Subject</Text>
      <View>
        <Text style={styles.text2}>Question #1</Text>
        <Text style={styles.text3}>
          The standard Lorem Ipsum passage.{'\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? </Text>
      </View>
      <Text style={styles.line}></Text>
      <Text style={styles.text3}>The standard Lorem Ipsum passage.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? </Text>

        <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.answerText}>Download Answer</Text>
              </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#0B55D1",
    width: "100%",
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
  line:{
    height: 1, width: '90%', backgroundColor: 'black', alignSelf: 'center' 
  },
  text1:{
    color: 'blue', marginTop: 30, marginLeft: 15, fontSize: 18, fontWeight: 'bold'
  },
  text2:{
    marginTop: 30, marginLeft: 15, fontSize: 16, fontWeight: 'bold'
  },
  text3:{
     marginTop: 20, marginLeft: 15, marginBottom: 15, fontSize: 14 
  },
  buttonContainer: {
    marginTop: 80,
    borderRadius: 10,
    backgroundColor: 'blue',
    height: 51.67,
    width: 330,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerText: {
    color: "white",
    fontSize: 16,
    padding: 10,
  },
})