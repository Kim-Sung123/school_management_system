import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function askQuestion() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.homeContainer}>
                <Image
                    source={require("../assets/images/Exam (1).png")}
                    style={styles.roleIcon}
                    resizeMode="contain"
                />
                <Text style={styles.hometext}>Ask QUESTION</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center",marginLeft: 20, marginRight: 20 }}>
                <Text>Ask your Question Below</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: "#2200ff", height: 300,marginTop: 10, }}
                />
                <TouchableOpacity style={styles.uploadContainer}>
                <Text style={styles.text}>Upload File</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.sendContainer}>
                <Text style={styles.text}>Ask Question</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: "#0B55D1",
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
    text:{
        fontSize: 16,
        marginBottom: 8,
        color: "#fff",
    },
    uploadContainer: {
        backgroundColor: "#0B55D1",
        borderRadius: 5,
        marginTop: 20,
        alignItems: "center",
        height: 50,
        width: 150,
        justifyContent: "center",
    },
    sendContainer:{
        backgroundColor: "#0B55D1",
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        marginLeft: 20,
        marginRight: 20,
    }

})