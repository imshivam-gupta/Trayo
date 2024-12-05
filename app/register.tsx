import React, { useState } from 'react';
import { Alert, StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from '@/components/ui/CustomInput';
import CustomButton from '@/components/ui/CustomButton';
import {router} from "expo-router";
import { useSupabase } from "@/context/supabase-provider";

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signUp } = useSupabase();

    // Sign up with email and password
    async function signUpWithEmail() {
        setLoading(true);

        try {
            await signUp(email, password, name);
        } catch (error) {
            if (error) {
                setLoading(false);
                Alert.alert('Error', error.message);
                return;
            }
        }

        setLoading(false);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const handleRegister = () => {
        if (password !== confirmPassword) {
            console.log("Passwords don't match");
            return;
        }
        console.log('Registering user with:', name, email, password);
        signUpWithEmail();
    };

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={styles.content}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust keyboard behavior based on platform
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.tagline}>Start your journey with Trayo</Text>

                    {/* Name Input */}
                    <CustomInput
                        placeholder="Full Name"
                        value={name}
                        onChangeText={setName}
                        keyboardType={'default'} // Set keyboard type to default
                    />

                    {/* Email Input */}
                    <CustomInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType={'email-address'} // Set keyboard type to email
                    />

                    {/* Password Input */}
                    <CustomInput
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    {/* Confirm Password Input */}
                    <CustomInput
                        placeholder="Confirm Password"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                    {/* Register Button */}
                    <CustomButton
                        title="Register"
                        onPress={handleRegister}
                        backgroundColor="#fff"
                        textColor="#000"
                        disabled={loading}
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    content: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    tagline: {
        fontSize: 18,
        color: '#aaa',
        marginBottom: 32,
    },
});
