import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// Define the Student interface
interface Student {
  id: number;
  name: string;
  marks: string;
}

export default function AddMarks() {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'Kim', marks: '' },
    { id: 2, name: 'John', marks: '' },
    { id: 3, name: 'Emma', marks: '' },
    { id: 4, name: 'Michael', marks: '' },
    { id: 5, name: 'Sophia', marks: '' },
    { id: 6, name: 'James', marks: '' },
    { id: 7, name: 'Olivia', marks: '' },
    { id: 8, name: 'William', marks: '' },
    { id: 9, name: 'Ava', marks: '' },
    { id: 10, name: 'Benjamin', marks: '' },
    { id: 11, name: 'Mia', marks: '' },
    { id: 12, name: 'Lucas', marks: '' },
    { id: 13, name: 'Charlotte', marks: '' },
    { id: 14, name: 'Henry', marks: '' },
    { id: 15, name: 'Amelia', marks: '' },
  ])

  const handleMarksChange = (studentId: number, value: string) => {
    // Allow only numbers and limit to 0-100
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) <= 100)) {
      setStudents(students.map((student): Student => {
        if (student.id === studentId) {
          return { ...student, marks: value }
        }
        return student
      }))
    }
  }

  const handleSubmit = (): void => {
    const marksData = students.map(student => ({
      name: student.name,
      marks: student.marks || '0'
    }))
    console.log('Marks submitted:', marksData)
    alert('Marks submitted successfully!')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.homeContainer}>
        <Image
          source={require("../assets/images/Exam (2).png")}
          style={styles.roleIcon}
          resizeMode="contain"
        />
        <Text style={styles.hometext}>ADD MARKS</Text>
      </View>
      
      <View style={styles.class}>
        <Text style={styles.text}>Class: 3A</Text>
        <Text style={styles.text}>Date: 12/12/2024</Text>
      </View>
      
      <View style={styles.header}>
        <Text style={styles.headerName}>Student Name</Text>
        <Text style={styles.headerMarks}>Marks</Text>
      </View>
      
      <ScrollView>
        {students.map((student: Student) => (
          <View key={student.id} style={styles.studentRow}>
            <Text style={styles.studentName}>{student.name}</Text>
            
            <View style={styles.marksGroup}>
              <TextInput
                style={styles.input}
                placeholderTextColor="#999"
                keyboardType="numeric"
                value={student.marks}
                onChangeText={(value: string) => handleMarksChange(student.id, value)}
                maxLength={3}
              />
            </View>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Submit Marks</Text>
        </TouchableOpacity>
      </View>
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
  class: {
    backgroundColor: "#1591EA",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1591EA",
    height: 40,
    marginTop: 30,
    paddingHorizontal: 15,
  },
  headerName: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    flex: 1,
    textAlign: "left",
    paddingLeft: 10,
  },
  headerMarks: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    width: 160,
  },
  studentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "white",
  },
  studentName: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    textAlign: "left",
  },
  marksGroup: {
    flexDirection: "row",
    justifyContent: "center",
    width: 160,
  },
  input: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: "#2EC4A6",
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    textAlign: "center",

  },
  footer: {
    padding: 20,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  submitButton: {
    backgroundColor: "#0B55D1",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
})