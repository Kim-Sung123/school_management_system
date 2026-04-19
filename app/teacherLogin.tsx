import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

const { width } = Dimensions.get("window");

export default function teacherLogin() {
  const [userName, setUserName] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Load user + image
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        const savedImage = await AsyncStorage.getItem("profileImage");

        if (userData) {
          const user = JSON.parse(userData);
          setUserName(user.username || "Teacher");
        }

        if (savedImage) {
          setProfileImage(savedImage);
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };

    loadUserData();
  }, []);

  // Pick Image
  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission required");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;

      setProfileImage(uri);
      await AsyncStorage.setItem("profileImage", uri);
    }
  };

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            await AsyncStorage.removeItem("user");
            router.replace("/login");
          } catch (error) {
            console.error("Error during logout:", error);
            Alert.alert("Error", "Failed to logout.");
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Curved Shape */}
      <View style={styles.topShape} />

      {/* Menu Button */}
      <TouchableOpacity
        onPress={() => {
          router.push("/studentNavMenu");
        }}
      >
        <Image
          source={require("../assets/images/Menu.png")}
          style={styles.menuIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>
        {/* Upload Profile Image */}
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={pickImage}
        >
          <Image
            source={
              profileImage
                ? { uri: profileImage }
                : require("../assets/images/bx-happy.svg.png")
            }
            style={styles.logo}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <Text style={styles.text}>
          Welcome {userName} →{"\n"}
          <Text style={{ fontSize: 16 }}>
            The standard Lorem Ipsum passage {"\n"}
          </Text>

          <Text style={{ fontSize: 14 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Text>

        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: width,
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                router.push("/attendance");
              }}
            >
              <View style={styles.roleContainer}>
                <Image
                  source={require("../assets/images/Attendance.png")}
                  style={styles.roleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.textRole}>Attendance</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                router.push("/homewrokMenu");
              }}
            >
              <View style={styles.roleContainer}>
                <Image
                  source={require("../assets/images/Homework.png")}
                  style={styles.roleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.textRole}>Homework</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                router.push("/result");
              }}
            >
              <View style={styles.roleContainer}>
                <Image
                  source={require("../assets/images/Exam.png")}
                  style={styles.roleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.textRole}>Results</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: width,
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                router.push("/addMarks");
              }}
            >
              <View style={styles.roleContainer}>
                <Image
                  source={require("../assets/images/Todo List.png")}
                  style={styles.roleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.textRole}>Exam Routine</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                router.push("/solutions");
              }}
            >
              <View style={styles.roleContainer}>
                <Image
                  source={require("../assets/images/Idea Sharing.png")}
                  style={styles.roleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.textRole}>Solution</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                router.push("/notice");
              }}
            >
              <View style={styles.roleContainer}>
                <Image
                  source={require("../assets/images/Questions.png")}
                  style={styles.roleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.textRole}>Notice & Events</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: width,
              marginLeft: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                router.push("/form");
              }}
            >
              <View style={styles.roleContainer}>
                <Image
                  source={require("../assets/images/Add User Male .png")}
                  style={styles.roleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.textRole}>Add Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  topShape: {
    position: "absolute",
    top: -150,
    width: width,
    height: width,
    backgroundColor: "#2EC4A6",
    borderRadius: width,
    alignSelf: "center",
  },

  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  logoContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
    borderWidth: 4,
    borderColor: "#2EC4A6",
    elevation: 5,
    overflow: "hidden",
  },

  logo: {
    width: 180,
    height: 180,
  },

  text: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    paddingHorizontal: 20,
    marginTop: 30,
    backgroundColor: "#0C46C4",
    width: 338,
    height: 91,
    borderRadius: 10,
  },

  roleIcon: {
    width: 60,
    height: 60,
  },

  roleContainer: {
    backgroundColor: "#a4f4e7",
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textRole: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    color: "#000000",
    marginTop: 8,
  },

  menuIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    marginTop: 20,
    marginLeft: 20,
  },
});