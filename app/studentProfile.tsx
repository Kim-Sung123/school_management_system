import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

export default function studentProfile() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSavedImage();
  }, []);

  const loadSavedImage = async () => {
    try {
      const savedImageUri = await AsyncStorage.getItem("studentProfileImage");
      if (savedImageUri) {
        setSelectedImage(savedImageUri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const saveImage = async (uri: string) => {
    await AsyncStorage.setItem("studentProfileImage", uri);
  };

  const pickImage = async () => {
    const { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission Needed");
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
      setSelectedImage(uri);
      await saveImage(uri);
    }
  };

  const takePhoto = async () => {
    const { status } =
      await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission Needed");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setSelectedImage(uri);
      await saveImage(uri);
    }
  };

  const deleteImage = async () => {
    await AsyncStorage.removeItem("studentProfileImage");
    setSelectedImage(null);
  };

  const showImageOptions = () => {
    Alert.alert("Profile Photo", "Choose Option", [
      { text: "Take Photo", onPress: takePhoto },
      { text: "Choose Gallery", onPress: pickImage },
      ...(selectedImage
        ? [{ text: "Delete Photo", onPress: deleteImage }]
        : []),
      { text: "Cancel", style: "cancel" },
    ]);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ marginTop: 50, textAlign: "center" }} >
          Loading...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        {/* Top Half Circle */}
        <View style={styles.topShape} />

        {/* Profile Image */}
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={showImageOptions}
        >
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              style={styles.profileImage}
            />
          ) : (
            <Image
              source={require("../assets/images/Union.png")}
              style={styles.profileImage}
            />
          )}
        </TouchableOpacity>

        {/* Student Info */}
        <View style={styles.infoBox}>
          <Text style={styles.idText}>ID: 165653</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Full Name:</Text>
            <Text style={styles.value}>Prajesh Shakya</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Grade:</Text>
            <Text style={styles.value}>9 'B'</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Roll No:</Text>
            <Text style={styles.value}>21</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>Prajesh Shakya</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Guardian’s Name:</Text>
            <Text style={styles.value}>Prajesh Shakya</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Guardian’s Contact:</Text>
            <Text style={styles.value}>984646464646</Text>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  topShape: {
    width: width,
    height: 170,
    backgroundColor: "#2EC4A6",
    borderBottomLeftRadius: width / 2,
    borderBottomRightRadius: width / 2,
  },

  imageWrapper: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: "#2EC4A6",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: -65,
    overflow: "hidden",
    elevation: 5,
  },

  profileImage: {
    width: "100%",
    height: "100%",
  },

  infoBox: {
    paddingHorizontal: 25,
    marginTop: 50,
  },

  idText: {
    fontSize: 30,
    color: "#0C46C4",
    fontWeight: "bold",
    marginBottom: 25,
  },

  row: {
    marginBottom: 18,
  },

  label: {
    fontSize: 16,
    color: "#0C46C4",
    marginBottom: 4,
  },

  value: {
    fontSize: 22,
    color: "#111",
    fontWeight: "500",
  },

  button: {
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 30,
    backgroundColor: "#0C46C4",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});