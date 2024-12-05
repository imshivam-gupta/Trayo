import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as AppleAuthentication from 'expo-apple-authentication';

// Custom UI Components
import CustomInput from '@/components/ui/CustomInput';
import CustomButton from '@/components/ui/CustomButton';
import Divider from '@/components/ui/Divider';
import {Link} from "expo-router";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with:', email, password);
    };

    const handleGoogleSignIn = () => {
        console.log('Google Sign-In initiated');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Trayo</Text>
                <Text style={styles.tagline}>Balance &nbsp; Simplify &nbsp; Thrive</Text>

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


                <View style={{ width: '90%', alignItems: 'flex-start' }}>
                    <TouchableOpacity onPress={() => console.log('Forgot Password Pressed')}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                {/* Login Button */}
                <CustomButton
                    title="Login"
                    onPress={handleLogin}
                    backgroundColor="#fff"
                    textColor="#000"
                />

                {/* Divider */}
                <Divider text="or" />

                {/* Google Sign-In Button */}
                <CustomButton
                    title="Sign in with Google"
                    onPress={handleGoogleSignIn}
                    icon={<AntDesign name="google" size={24} color="white" />}
                />

                {/* Apple Sign-In Button */}
                <CustomButton
                    title="Sign in with Apple"
                    onPress={() => console.log('Apple Sign-In initiated')}
                    icon={<AntDesign name="apple1" size={24} color="white" />}
                />
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Logging in helps us provide you with a personalized and secure experience. Your data is safe with us.
                    If you don't have an account, you can create &nbsp;
                    <Link
                        href={'/register'}
                        style={{ color: '#8BC34A' }}
                    >
                        Register here
                    </Link>.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
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
    forgotPassword: {
        color: '#8BC34A',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 8,
        marginBottom: 10,
        alignSelf: 'flex-start',
        marginHorizontal: 4,
    },
    footer: {
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    footerText: {
        fontSize: 12,
        color: '#777',
        textAlign: 'center',
    },
});