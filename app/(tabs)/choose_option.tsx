import React from "react";
import {
    Dimensions,
    StyleSheet,
    View,
    Image,
    Text, TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

const ChooseOption: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Top Curved Shape */}
            <View style={styles.topShape} />

            {/* Content */}
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require("../../assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.text}>
                    choose your option
                </Text>

                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: width, }}>
                    <TouchableOpacity onPress={() => {
                        router.push('/login');
                    }}>
                        <View style={styles.roleContainer}>
                            <Image
                                source={require("../../assets/images/Student Male.png")}
                                style={styles.roleIcon}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={styles.textRole}>Student</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {
                        router.push('/login');
                    }}>
                        <View style={styles.roleContainer}>
                            <Image
                                source={require("../../assets/images/Tuition.png")}
                                style={styles.roleIcon}
                                resizeMode="contain"
                            />

                        </View>
                        <Text style={styles.textRole}>Teacher</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={() => {
                        router.push('/login');
                    }}>
                    <View style={styles.roleContainer}>
                        <Image
                            source={require("../../assets/images/Person.png")}
                            style={styles.roleIcon}
                            resizeMode="contain"
                        />

                    </View>
                    <Text style={styles.textRole}>Guest</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
};

export default ChooseOption;

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
    },

    // Logo image
    logo: {
        width: 150,
        height: 150,
    },
    text: {
        textAlign: "center", marginBottom: 20, fontSize: 18, fontWeight: "600", color: "#0C46C4", paddingHorizontal: 20, marginTop: 30,
    },

    roleIcon: {
        width: 60, height: 60,
    },
    roleContainer: {
        backgroundColor: "#0C46C4", width: 100, height: 100, borderRadius: 10, justifyContent: "center", alignItems: "center",

    },
    textRole: {
        textAlign: "center", marginBottom: 20, fontSize: 18, fontWeight: "600", color: "#000000", paddingHorizontal: 20, marginTop: 30,
    },
});