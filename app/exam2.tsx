// Exam2.tsx
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex?: number;
};

const sampleQuestions: Question[] = [
  {
    id: "q1",
    question: "Who was the first king of Nepal?",
    options: [
      "Prithvi Narayan Shah",
      "Tribhuvan Bir Bikram Shah",
      "Mahendra Bir Bikram Shah",
      "Gyanendra Shah",
    ],
    correctIndex: 0,
  },
  {
    id: "q2",
    question: "Who was the first king of Nepal?",
    options: [
      "Prithvi Narayan Shah",
      "Tribhuvan Bir Bikram Shah",
      "Mahendra Bir Bikram Shah",
      "Gyanendra Shah",
    ],
    correctIndex: 0,
  },
  {
    id: "q3",
    question: "Who was the first king of Nepal?",
    options: [
      "Prithvi Narayan Shah",
      "Tribhuvan Bir Bikram Shah",
      "Mahendra Bir Bikram Shah",
      "Gyanendra Shah",
    ],
    correctIndex: 0,
  },
  {
    id: "q4",
    question: "Who was the first king of Nepal?",
    options: [
      "Prithvi Narayan Shah",
      "Tribhuvan Bir Bikram Shah",
      "Mahendra Bir Bikram Shah",
      "Gyanendra Shah",
    ],
    correctIndex: 0,
  },
];

export default function Exam2(): JSX.Element {
  // selectedAnswers maps questionId -> selected option index
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | null>>(
    {}
  );

  const onSelectOption = (questionId: string, optionIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const renderOption = (questionId: string, option: string, index: number) => {
    const isSelected = selectedAnswers[questionId] === index;
    return (
      <TouchableOpacity
        key={index}
        style={[styles.optionButton, isSelected && styles.optionSelected]}
        onPress={() => onSelectOption(questionId, index)}
        activeOpacity={0.8}
      >
        <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
          {index + 1}. {option}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCard: ListRenderItem<Question> = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader} />
        <View style={styles.cardBody}>
          <Text style={styles.questionText}>{item.question}</Text>
          <View style={styles.optionsRow}>
            <View style={styles.optionColumn}>
              {item.options.slice(0, 2).map((opt, i) => renderOption(item.id, opt, i))}
            </View>
            <View style={styles.optionColumn}>
              {item.options.slice(2, 4).map((opt, i) => renderOption(item.id, opt, i + 2))}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity style={styles.homeContainer}  onPress={() => {
              router.push('/studentLogin');
            }}>
        <Image
          // adjust the path if needed
          source={require("../assets/images/Questions (1).png")}
          style={styles.roleIcon}
          resizeMode="contain"
        />
        <Text style={styles.hometext}>QUIZ</Text>
      </TouchableOpacity>

      <FlatList
        data={sampleQuestions}
        keyExtractor={(q) => q.id}
        contentContainerStyle={styles.listContainer}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  homeContainer: {
    backgroundColor: "#0B55D1",
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 30,

  },
  hometext: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 10,
  },
  roleIcon: {
    width: 38,
    height: 38,
  },

  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  card: {
    backgroundColor: "#0000FF",
    borderRadius: 12,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    height: 10,
    backgroundColor: "#0B55D1",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardBody: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    padding: 14,
  },

  questionText: {
    color: "#0B55D1",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },

  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  optionColumn: {
    width: "48%",
  },

  optionButton: {
    borderWidth: 1,
    borderColor: "#E0E6F0",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 18,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  optionSelected: {
    backgroundColor: "#E8F0FF",
    borderColor: "#2B6BFF",
  },

  optionText: {
    color: "#2B6BFF",
    fontSize: 13,
  },
  optionTextSelected: {
    color: "#123EAB",
    fontWeight: "700",
  },
});
