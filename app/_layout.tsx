import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/use-color-scheme';


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="studentProfile" options={{ headerShown: false }} />
          <Stack.Screen name="exam2" options={{ headerShown: false }} />
          <Stack.Screen name="exam" options={{ headerShown: false }} />
          <Stack.Screen name="quizResult" options={{ headerShown: false }} />
          <Stack.Screen name="quiz" options={{ headerShown: false }} />
          <Stack.Screen name="startQuiz" options={{ headerShown: false }} />
          <Stack.Screen name="askQuestion" options={{ headerShown: false }} />
          <Stack.Screen name="answer" options={{ headerShown: false }} />
          <Stack.Screen name="listOfQuestion" options={{ headerShown: false }} />
          <Stack.Screen name="secondTermResult" options={{ headerShown: false }} />
          <Stack.Screen name="firstTermResult" options={{ headerShown: false }} />
          <Stack.Screen name="resultStudent" options={{ headerShown: false }} />
          <Stack.Screen name="homeworkStudent" options={{ headerShown: false }} />
          <Stack.Screen name="form" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="solutions" options={{ headerShown: false }} />
          <Stack.Screen name="notice" options={{ headerShown: false }} />
          <Stack.Screen name="addMarks" options={{ headerShown: false }} />
          <Stack.Screen name="result" options={{ headerShown: false }} />
          <Stack.Screen name="attendance" options={{ headerShown: false }} />
          <Stack.Screen name="teacherLogin" options={{ headerShown: false }} />
          <Stack.Screen name="studentLogin" options={{ headerShown: false }} />
          <Stack.Screen name="homewrokMenu" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          <Stack.Screen
          name="popUp"
          options={{
            title: "Pop Up",
            headerShown: false,
            presentation: "formSheet",
            sheetAllowedDetents: [0.25, 0.5, 0.75],
            sheetInitialDetentIndex: 1,
            sheetGrabberVisible: false,
          }}
        />
        <Stack.Screen
          name="studentNavMenu"
          options={{
            headerShown: false,
            presentation: "transparentModal", // key for overlay
            animation: "fade",
            
          }}
        />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}