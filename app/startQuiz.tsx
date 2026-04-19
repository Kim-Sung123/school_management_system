import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
export default function startQuiz() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity style={styles.homeContainer} onPress={() => {
                    router.push('/studentLogin');
                  }}>
                <Image
                    source={require("../assets/images/Questions (1).png")}
                    style={styles.roleIcon}
                    resizeMode="contain"
                />
                <Text style={styles.hometext}>START QUIZ</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Start Quiz</Text>
            <View>
                <Image
                    source={require("../assets/images/image.png")}
                    style={styles.quizIcon}
                    resizeMode="contain"
                />
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                router.push('/quiz');
            }}>
                <Text style={styles.startText}>Start</Text>
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
    text: {
        alignSelf: 'center',
        marginTop: 40,
        fontSize: 16
    },
    quizIcon: {
        width: 175,
        height: 139,
        alignSelf: 'center',
        marginTop: 50
    },
    buttonContainer: {
        marginTop: 80,
        borderRadius: 15,
        backgroundColor: 'blue',
        height: 51.67,
        width: 330,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    startText: {
        color: "white",
        fontSize: 16,
        padding: 10,
    },
})