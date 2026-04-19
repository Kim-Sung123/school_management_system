import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get("window");

export default function studentLogin() {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [userName, setUserName] = useState<string>("");

    useEffect(() => {
        loadProfileData();
    }, []);

    const loadProfileData = async () => {
        try {
            // Load profile image
            const savedImage = await AsyncStorage.getItem('studentProfileImage');
            if (savedImage) {
                setProfileImage(savedImage);
            }
            
            // Load user data
            const userData = await AsyncStorage.getItem('user');
            if (userData) {
                const user = JSON.parse(userData);
                setUserName(user.username || "Student");
            }
        } catch (error) {
            console.error('Error loading profile data:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Curved Shape */}
            <View style={styles.topShape} />

            <TouchableOpacity onPress={() => {
                router.push('/studentNavMenu');
            }}>
                <Image
                    source={require("../assets/images/Menu.png")}
                    style={styles.menuIcon}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            {/* Content */}
            <View style={styles.content}>
                <TouchableOpacity style={styles.logoContainer} onPress={() => {
                    router.push('/studentProfile');
                }}>
                    {profileImage ? (
                        <Image
                            source={{ uri: profileImage }}
                            style={styles.logo}
                            resizeMode="cover"
                        />
                    ) : (
                        <Image
                            source={require("../assets/images/bx-happy.svg.png")}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    )}
                </TouchableOpacity>
                <Text style={styles.text}>
                    Welcome {userName} →{'\n'}
                    <Text style={{ fontSize: 16 }}>The standard Lorem Ipsum passage {'\n'}</Text>

                    <Text style={{ fontSize: 14 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Text>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: width, marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => {
                            router.push('/attendance');
                        }}>
                            <View style={styles.roleContainer}>
                                <Image
                                    source={require("../assets/images/Attendance.png")}
                                    style={styles.roleIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={styles.textRole}>Attendance</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            router.push('/homeworkStudent');
                        }}>
                            <View style={styles.roleContainer}>
                                <Image
                                    source={require("../assets/images/Homework.png")}
                                    style={styles.roleIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={styles.textRole}>Homework</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            router.push('/resultStudent');
                        }}>
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

                    <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: width, marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => {
                            router.push('/exam');
                        }}>
                            <View style={styles.roleContainer}>
                                <Image
                                    source={require("../assets/images/Todo List.png")}
                                    style={styles.roleIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={styles.textRole}>Exam Routine</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            router.push('/listOfQuestion');
                        }}>
                            <View style={styles.roleContainer}>
                                <Image
                                    source={require("../assets/images/Idea Sharing.png")}
                                    style={styles.roleIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={styles.textRole}>Solution</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            router.push('/startQuiz');
                        }}>
                            <View style={styles.roleContainer}>
                                <Image
                                    source={require("../assets/images/Questions.png")}
                                    style={styles.roleIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={styles.textRole}>Quiz</Text>
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

    // Green curved background
    topShape: {
        position: "absolute",
        top: -150,
        width: width * 1,
        height: width * 1,
        backgroundColor: "#2EC4A6",
        borderRadius: width,
        alignSelf: "center",
    },

    // Center content
    content: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },

    // White circle with shadow
    logoContainer: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 120,

        // Optional border (like your design)
        borderWidth: 4,
        borderColor: "#2EC4A6",

        // Shadow (iOS)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Shadow (Android)
        elevation: 5,
        overflow: 'hidden',
    },

    // Logo image
    logo: {
        width: 150,
        height: 150,
        borderRadius: 75,
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
    }
});