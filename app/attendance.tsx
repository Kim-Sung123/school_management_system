import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from "expo-router";

// Define the Student interface
interface Student {
  id: number;
  name: string;
  present: boolean;
  absent: boolean;
}

export default function Attendance() {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'Kim', present: false, absent: false },
    { id: 2, name: 'John', present: false, absent: false },
    { id: 3, name: 'Emma', present: false, absent: false },
    { id: 4, name: 'Michael', present: false, absent: false },
    { id: 5, name: 'Sophia', present: false, absent: false },
    { id: 6, name: 'James', present: false, absent: false },
    { id: 7, name: 'Olivia', present: false, absent: false },
    { id: 8, name: 'William', present: false, absent: false },
    { id: 9, name: 'Ava', present: false, absent: false },
    { id: 10, name: 'Benjamin', present: false, absent: false },
    { id: 11, name: 'Mia', present: false, absent: false },
    { id: 12, name: 'Lucas', present: false, absent: false },
    { id: 13, name: 'Charlotte', present: false, absent: false },
    { id: 14, name: 'Henry', present: false, absent: false },
    { id: 15, name: 'Amelia', present: false, absent: false },
  ])

  const handlePresent = (studentId: number): void => {
    setStudents(students.map((student): Student => {
      if (student.id === studentId) {
        return { ...student, present: !student.present, absent: false }
      }
      return student
    }))
  }

  const handleAbsent = (studentId: number): void => {
    setStudents(students.map((student): Student => {
      if (student.id === studentId) {
        return { ...student, absent: !student.absent, present: false }
      }
      return student
    }))
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity style={styles.homeContainer}>
        <Image
          source={require("../assets/images/Attendance (1).png")}
          style={styles.roleIcon}
          resizeMode="contain"
        />
        <Text style={styles.hometext}>ATTENDANCE</Text>
      </TouchableOpacity>

      <View style={styles.class}>
        <Text style={styles.text}>Class: 3A</Text>
        <Text style={styles.text}>Date: 12/12/2024</Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerName}>Student Name</Text>
        <View style={styles.headerCheckboxes}>
          <Text style={styles.headerText}>Present</Text>
          <Text style={styles.headerText}>Absent</Text>
        </View>
      </View>

      <ScrollView>
        {students.map((student: Student) => (
          <View key={student.id} style={styles.studentRow}>
            <Text style={styles.studentName}>{student.name}</Text>

            <View style={styles.checkboxGroup}>
              <TouchableOpacity onPress={() => handlePresent(student.id)} style={styles.checkboxWrapper}>
                <View style={[styles.checkbox, student.present && styles.checkboxChecked]}>
                  {student.present && <Text style={styles.checkmark}>✓</Text>}
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleAbsent(student.id)} style={styles.checkboxWrapper}>
                <View style={[styles.checkbox, student.absent && styles.checkboxChecked]}>
                  {student.absent && <Text style={styles.checkmark}>✓</Text>}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => console.log('Attendance submitted:', students)}
        >
          <Text style={styles.submitButtonText}>Submit Attendance</Text>
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
  headerCheckboxes: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 160,
  },
  headerText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    width: 70,
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
  checkboxGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 160,
  },
  checkboxWrapper: {
    width: 70,
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#0B55D1",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  checkboxChecked: {
    backgroundColor: "#0B55D1",
  },
  checkmark: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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