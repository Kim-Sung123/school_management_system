import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
export default function HomeworkMenu() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity style={styles.homeContainer} onPress={() => {
        router.push('/teacherLogin');
      }}>
        <Image
          source={require("../assets/images/Homework (1).png")}
          style={styles.roleIcon}
          resizeMode="contain"
        />
        <Text style={styles.hometext}>Homework Menu</Text>
      </TouchableOpacity>
      <View style={{ paddingTop: 40 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>The standard Lorem Ipsum passage</Text>
        <Text style={{ fontSize: 14, color: "gray" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
      </View>

      <View style={{ paddingTop: 50, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: 'blue', paddingBottom: 8 }}>Subject</Text>
        <Text style={styles.label}>Add homework</Text>
        <TextInput
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          color="#fff"
          onPress={() => {
            router.push('/popUp');
          }}
        />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.subject}>Subject</Text>
        <Text style={styles.subject}>Subject</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: '#0B55D1',
    height: 51.67,
    width: 350,
    alignSelf: 'center',

  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 81,
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    borderColor: '#0B55D1',
  },
  homeContainer: {
    backgroundColor: "blue",
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
  subject: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginRight: 10

  },
  subContainer: {
    backgroundColor: "#0B55D1",
    marginTop: 300,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  }
});