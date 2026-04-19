import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"

interface OptionProps {
    text: string
    isSelected?: boolean
    onPress?: () => void
}

// Option component
const Option: React.FC<OptionProps> = ({ text, isSelected = false, onPress }) => (
    <TouchableOpacity
        style={[styles.optionContainer, isSelected && styles.selectedOption]}
        onPress={onPress}
    >
        <Text style={[styles.optionText, isSelected && styles.selectedOptionText]}>
            {text}
        </Text>
    </TouchableOpacity>
)
export default function exam() {

    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    const options = ['Prithvi Narayan Shah', 'Option A', 'Option B', 'Option C']

    const handleSubmit = () => {
        if (selectedOption) {
            console.log('Selected option:', selectedOption)
            // Add your submission logic here
            router.push('/exam2') // Example navigation
        } else {
            alert('Please select an option first')
        }
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <TouchableOpacity style={styles.homeContainer}  onPress={() => {
                    router.push('/studentLogin');
                  }}>
                <Image
                    source={require("../assets/images/Questions (1).png")}
                    style={styles.roleIcon}
                    resizeMode="contain"
                />
                <Text style={styles.hometext}>QUIZ</Text>
            </TouchableOpacity>
            <Text style={styles.text}>What is frist{'\n'} king of Nepal?</Text>
            <View style={styles.optionsContainer}>
                {options.map((option, index) => (
                    <Option
                        key={index}
                        text={option}
                        isSelected={selectedOption === option}
                        onPress={() => setSelectedOption(option)}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
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
    questionText: {
        margin: 30,
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '500',
    },
    optionsContainer: {
        paddingHorizontal: 20,
        gap: 12,
        marginTop: 80
    },
    optionContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
    },
    selectedOption: {
        backgroundColor: '#0B55D1',
        borderColor: '#0B55D1',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
        alignSelf: 'center'
    },
    selectedOptionText: {
        color: 'white',
        fontWeight: 'bold',
    },
    submitButton: {
        backgroundColor: '#0B55D1',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 150,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        color: '#0C46C4',
        fontSize: 30,
        fontWeight: 800,
        alignSelf: 'center',
        marginTop: 80,
    },

})