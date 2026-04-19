import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router";
export default function quizResult() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <TouchableOpacity style={styles.homeContainer} onPress={() => {
                router.push('/studentLogin');
            }}>
                <Image
                    source={require("../assets/images/Questions (1).png")}
                    style={styles.roleIcon}
                    resizeMode="contain"
                />
                <Text style={styles.hometext}>ASk QUESTION</Text>
            </TouchableOpacity>
            <Text style={styles.scoreText}>Score</Text>
            <Text style={styles.text}>Score: 4</Text>
            <Text style={styles.text}>Total: 5</Text>

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
    scoreText: {
        marginTop: 50,
        fontSize: 25,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 100,
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
    },
})