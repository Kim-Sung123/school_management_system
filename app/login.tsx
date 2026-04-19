import React, { useState } from "react";
import {
    Dimensions,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get("window");

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Mock credentials
    const credentials = {
        teacher: { username: "teacher", password: "12345", role: "teacher" },
        student: { username: "student", password: "12345", role: "student" },
    };

    // Store user data in AsyncStorage
    const storeUserData = async (userData: { username: string; role: string }) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            console.log('User data stored successfully');
        } catch (error) {
            console.error('Error storing user data:', error);
        }
    };

    const handleLogin = async () => {
        // Validation
        if (!username.trim()) {
            Alert.alert("Error", "Please enter username");
            return;
        }

        if (!password) {
            Alert.alert("Error", "Please enter password");
            return;
        }

        setLoading(true);

        // Simulate API call
        setTimeout(async () => {
            // Check if credentials match teacher
            if (username === credentials.teacher.username && password === credentials.teacher.password) {
                // Store teacher user data
                await storeUserData({
                    username: credentials.teacher.username,
                    role: "teacher"
                });
                setLoading(false);
                router.replace("/teacherLogin");
            } 
            // Check if credentials match student
            else if (username === credentials.student.username && password === credentials.student.password) {
                // Store student user data
                await storeUserData({
                    username: credentials.student.username,
                    role: "student"
                });
                setLoading(false);
                router.replace("/studentLogin");
            } 
            else {
                setLoading(false);
                Alert.alert("Login Failed", "Invalid username or password.\n\nTeacher: teacher / 12345\nStudent: student / 12345");
            }
        }, 1000);
    };

    // Check if user is already logged in (call this in useEffect if needed)
    React.useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const userData = await AsyncStorage.getItem('user');
                if (userData) {
                    const user = JSON.parse(userData);
                    // Auto-redirect based on role
                    if (user.role === 'teacher') {
                        router.replace("/teacherLogin");
                    } else if (user.role === 'student') {
                        router.replace("/studentLogin");
                    }
                }
            } catch (error) {
                console.error('Error checking login status:', error);
            }
        };
        
        checkLoginStatus();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Curved Shape */}
            <View style={styles.topShape} />

            {/* Content */}
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.title}>Login</Text>

                {/* Login Form */}
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter username"
                            value={username}
                            onChangeText={setUsername}
                            autoCapitalize="none"
                            editable={!loading}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={[styles.input, styles.passwordInput]}
                                placeholder="Enter password"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                                editable={!loading}
                            />
                            <TouchableOpacity 
                                style={styles.eyeButton}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Text>{showPassword ? "👁️" : "👁️‍🗨️"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.loginButton, loading && styles.loginButtonDisabled]}
                        onPress={handleLogin}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#FFFFFF" />
                        ) : (
                            <Text style={styles.loginButtonText}>Login</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.backButtonText}>← Back to Options</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.demoInfo}>
                    <Text style={styles.demoTitle}>Demo Credentials:</Text>
                    <Text style={styles.demoText}>Teacher: username teacher / password 12345</Text>
                    <Text style={styles.demoText}>Student: username student / password 12345</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    topShape: {
        position: "absolute",
        top: -150,
        width: width * 1,
        height: width * 1,
        backgroundColor: "#2EC4A6",
        borderRadius: width,
        alignSelf: "center",
    },
    content: {
        flex: 1,
        alignItems: "center",
    },
    logoContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
        borderWidth: 4,
        borderColor: "#2EC4A6",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    logo: {
        width: 90,
        height: 90,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#0C46C4",
        marginTop: 30,
        marginBottom: 30,
    },
    form: {
        width: width - 40,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: "#FAFAFA",
    },
    passwordContainer: {
        position: "relative",
    },
    passwordInput: {
        paddingRight: 50,
    },
    eyeButton: {
        position: "absolute",
        right: 15,
        top: 12,
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: "#0C46C4",
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: "#0B55D1",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 15,
    },
    loginButtonDisabled: {
        opacity: 0.7,
    },
    loginButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    backButton: {
        alignItems: "center",
        paddingVertical: 10,
    },
    backButtonText: {
        color: "#666",
        fontSize: 16,
    },
    demoInfo: {
        marginTop: 20,
        padding: 15,
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        width: width - 40,
        alignItems: "center",
    },
    demoTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    demoText: {
        fontSize: 12,
        color: "#666",
        marginBottom: 3,
    },
});