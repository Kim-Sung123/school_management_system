import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
export default function resultStudent() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity style={styles.homeContainer} onPress={() => {
                router.push('/studentLogin');
            }}>
                <Image
                    source={require("../assets/images/Exam (1).png")}
                    style={styles.roleIcon}
                    resizeMode="contain"
                />
                <Text style={styles.hometext}>RESULTS</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>First Terminal</Text>
                    <View style={styles.box}></View>
                    <TouchableOpacity style={styles.publishContainer} onPress={() => {
                        router.push('/firstTermResult');
                    }}>
                        <Text style={styles.publishText}>VIEW</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Second Terminal</Text>
                    <View style={styles.box}></View>
                    <TouchableOpacity style={styles.publishContainer} onPress={() => {
                        router.push('/secondTermResult');
                    }}>
                        <Text style={styles.publishText}>VIEW</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        textAlign: "center",
        borderRadius: 10,
        marginLeft: 40,
        marginTop: 40,
    },
    textContainer: {
        backgroundColor: "#fff",
        height: '100%',
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
        color: '#0048ff',
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    box: {
        backgroundColor: "#ADADAD",
        height: '30%',
        width: "100%",
        alignSelf: "center",
    },
    publishContainer: {
        flexDirection: "row-reverse",
        marginTop: 40,
    },
    publishText: {
        color: '#0048ff',
        fontSize: 16,
    }
});