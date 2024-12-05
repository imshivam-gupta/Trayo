import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CustomInput from '@/components/ui/CustomInput';  // Assuming CustomInput is available
import CustomButton from '@/components/ui/CustomButton';  // Assuming CustomButton is available
import { Link } from 'expo-router';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (password !== confirmPassword) {
            console.log("Passwords don't match");
            return;
        }
        console.log('Registering user with:', name, email, password);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.tagline}>Start your journey with Trayo</Text>

                {/* Name Input */}
                <CustomInput
                    placeholder="Full Name"
                    value={name}
                    onChangeText={setName}
                />

                {/* Email Input */}
                <CustomInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
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
                />


            </View>
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
