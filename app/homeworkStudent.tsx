import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function HomeworkStudent() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity style={styles.homeContainer} onPress={() => {
        router.push('/studentLogin');
      }}>
        <Image
          source={require("../assets/images/Homework (1).png")}
          style={styles.roleIcon}
          resizeMode="contain"
        />
        <Text style={styles.hometext}>HOMEWORK</Text>
      </TouchableOpacity>

      <View style={{ paddingTop: 50, alignSelf: "center", }}>
        <Text style={{ fontSize: 16, color: 'blue', paddingBottom: 15, marginBottom: 10 }}>{'Math_2078/4/8<homework file name>'}</Text>
        <View style={styles.box}></View>
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.text}>Download your homework </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#0B55D1',
    height: 51.67,
    width: 330,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  box: {
    width: 350,
    height: 200,
    backgroundColor: '#C4C4C4',
  },
  text: {
    color: '#fff',
    fontSize: 16
  },
});