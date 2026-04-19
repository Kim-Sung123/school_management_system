import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function listOfQuestion() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <TouchableOpacity
        style={styles.homeContainer}
        onPress={() => {
          router.push("/studentLogin");
        }}
      >
        <Image
          source={require("../assets/images/Exam (1).png")}
          style={styles.roleIcon}
          resizeMode="contain"
        />
        <Text style={styles.hometext}>Question LIST</Text>
      </TouchableOpacity>

      {/* First Card */}
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Question</Text>

          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua?
          </Text>

          <TouchableOpacity
            style={styles.publishContainer}
            onPress={() => {
              router.push("/answer");
            }}
          >
            <Text style={styles.publishText}>VIEW</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Second Card */}
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Question</Text>

          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua?
          </Text>

          <TouchableOpacity
            style={styles.publishContainer}
            onPress={() => {
              router.push("/answer");
            }}
          >
            <Text style={styles.publishText}>VIEW</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>Remove Question</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn} onPress={() => {
          router.push("/askQuestion");
        }}>
          <Text style={styles.actionText}>Add Question</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          router.push("/askQuestion");
        }}
      >
        <IconSymbol size={28} name="plus" color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
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

  container: {
    backgroundColor: "#0B55D1",
    height: 200,
    width: "80%",
    borderRadius: 10,
    marginLeft: 40,
    marginTop: 40,
  },

  textContainer: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    marginTop: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 25,
  },

  text: {
    color: "#0048ff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  descText: {
    color: "#777",
    fontSize: 13,
    lineHeight: 18,
  },

  publishContainer: {
    flexDirection: "row-reverse",
    marginTop: 35,
  },

  publishText: {
    color: "#0048ff",
    fontSize: 18,
  },

  /* Bottom Buttons */
  bottomButtons: {
    alignItems: "flex-end",
    marginTop: 110,
    marginRight: 20,
  },

  actionBtn: {
    borderWidth: 1,
    borderColor: "#A7E6E6",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    backgroundColor: "#fff",
    marginBottom: 12,
  },

  actionText: {
    fontSize: 12,
    color: "#8A8A8A",
  },

  /* Floating Button */
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#5B58AD",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
});