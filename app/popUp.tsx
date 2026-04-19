import { StyleSheet, Text, View, TouchableOpacity, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'
import { router } from "expo-router";

export default function popUp() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  
  // Dropdown visibility states
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [showSectionDropdown, setShowSectionDropdown] = useState(false);
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);

  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4'];
  const sections = ['Section A', 'Section B', 'Section C'];
  const subjects = ['Mathematics', 'Science', 'English', 'History', 'Geography'];

  const handleConfirm = () => {
    if (selectedClass && selectedSection && selectedSubject) {
      console.log('Selected:', { selectedClass, selectedSection, selectedSubject });
      router.back();
    } else {
      alert('Please select all options');
    }
  };

  const renderDropdown = (visible, setVisible, items, selectedItem, setSelectedItem, placeholder) => (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <TouchableOpacity 
        style={styles.modalOverlay} 
        activeOpacity={1} 
        onPress={() => setVisible(false)}
      >
        <View style={styles.dropdownContainer}>
          <FlatList
            data={items}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.dropdownItem,
                  selectedItem === item && styles.selectedDropdownItem
                ]}
                onPress={() => {
                  setSelectedItem(item);
                  setVisible(false);
                }}
              >
                <Text style={[
                  styles.dropdownItemText,
                  selectedItem === item && styles.selectedDropdownItemText
                ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <Text style={styles.text}>Class Selection</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.text}>Close</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Class Dropdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Class</Text>
          <TouchableOpacity 
            style={styles.dropdownButton} 
            onPress={() => setShowClassDropdown(true)}
          >
            <Text style={selectedClass ? styles.dropdownButtonText : styles.placeholderText}>
              {selectedClass || "Select Class"}
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
        </View>

        {/* Section Dropdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Section</Text>
          <TouchableOpacity 
            style={styles.dropdownButton} 
            onPress={() => setShowSectionDropdown(true)}
          >
            <Text style={selectedSection ? styles.dropdownButtonText : styles.placeholderText}>
              {selectedSection || "Select Section"}
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
        </View>

        {/* Subject Dropdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Subject</Text>
          <TouchableOpacity 
            style={styles.dropdownButton} 
            onPress={() => setShowSubjectDropdown(true)}
          >
            <Text style={selectedSubject ? styles.dropdownButtonText : styles.placeholderText}>
              {selectedSubject || "Select Subject"}
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>Confirm Selection</Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown Modals */}
      {renderDropdown(showClassDropdown, setShowClassDropdown, classes, selectedClass, setSelectedClass, "Select Class")}
      {renderDropdown(showSectionDropdown, setShowSectionDropdown, sections, selectedSection, setSelectedSection, "Select Section")}
      {renderDropdown(showSubjectDropdown, setShowSubjectDropdown, subjects, selectedSubject, setSelectedSubject, "Select Subject")}
    </View> 
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "blue",
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  dropdownButtonText: {
    fontSize: 16,
    color: "#333",
  },
  placeholderText: {
    fontSize: 16,
    color: "#999",
  },
  dropdownArrow: {
    fontSize: 22,
    color: "#2EC4A6",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "80%",
    maxHeight: 300,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  selectedDropdownItem: {
    backgroundColor: "#007AFF",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
  },
  selectedDropdownItemText: {
    color: "#fff",
    fontWeight: "500",
  },
  confirmButton: {
    backgroundColor: "#28a745",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
});