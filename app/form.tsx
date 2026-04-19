import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get("window");

export default function Form() {
  const [photo, setPhoto] = useState<string | null>(null);

  // Pick image
  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission needed", "Allow gallery access.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Curved Shape */}
      <View style={styles.topShape} />

      {/* Content */}
      <View style={styles.content}>
        <TouchableOpacity style={styles.logoContainer} onPress={pickImage}>
          {photo ? (
            <Image
              source={{ uri: photo }}
              style={styles.profileImage}
            />
          ) : (
            <Image
              source={require("../assets/images/Union.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          )}

          <Text style={styles.textAddPhoto}>Add Photo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1, margin: 10 }}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Something..."
          placeholderTextColor="#007AFF"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Something..."
          placeholderTextColor="#007AFF"
        />

        <Text style={styles.label}>Class</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Something..."
          placeholderTextColor="#007AFF"
        />

        <Text style={styles.label}>Section</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Something..."
          placeholderTextColor="#007AFF"
        />

        <Text style={styles.label}>Roll No</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Something..."
          placeholderTextColor="#007AFF"
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Add to Contact"
            color="#fff"
            onPress={() => Alert.alert('Contact Added')}
          />
        </View>
      </ScrollView>
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  logo: {
    width: 100,
    height: 100,
  },

  profileImage: {
    width: 170,
    height: 170,
    borderRadius: 85,
  },

  textAddPhoto: {
    marginTop: 10,
    fontSize: 16,
    color: '#2EC4A6',
    fontWeight: '500',
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },

  input: {
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    borderColor: 'blue',
  },

  buttonContainer: {
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    height: 51,
    width: 303,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});