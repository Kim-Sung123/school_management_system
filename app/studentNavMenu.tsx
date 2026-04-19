import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Image, Alert } from 'react-native'
import React from 'react'
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function studentNavMenu() {
  
  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('user');
              router.replace('/(tabs)/choose_option');
            } catch (error) {
              console.error('Error during logout:', error);
              Alert.alert("Error", "Failed to logout. Please try again.");
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <View style={styles.header}></View>

        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require("../assets/images/School House.png")}
            style={styles.iconsize}
            resizeMode="contain"
          />
          <Text style={styles.text}>Profile of School</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require("../assets/images/US News.png")}
            style={styles.iconsize}
            resizeMode="contain"
          />
          <Text style={styles.text}>Profile of publication</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require("../assets/images/Office Phone.png")}
            style={styles.iconsize}
            resizeMode="contain"
          />
          <Text style={styles.text}>Emergency contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require("../assets/images/Automatic.png")}
            style={styles.iconsize}
            resizeMode="contain"
          />
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>

        {/* Logout button with AsyncStorage */}
        <TouchableOpacity style={styles.iconContainer} onPress={handleLogout}>
          <Image
            source={require("../assets/images/Exit.png")}
            style={styles.iconsize}
            resizeMode="contain"
          />
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback onPress={() => router.back()}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: 280,
    backgroundColor: "#0C46C4",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#C4C4C4",
    height: 250,
    width: "100%",
  },
  overlay: {
    flex: 1,
  },
  text: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    marginTop: 5
  },
  iconsize: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    padding: 20,
    flexDirection: "row",
  }
})