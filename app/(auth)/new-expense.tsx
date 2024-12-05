import React from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView} from 'react-native';
import  CustomButton  from '@/components/ui/CustomButton'; // Assuming CustomButton is in your components folder

export default function NewExpense() {

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.subtitle}>Sagye</Text>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#121212', // Dark background
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#aaa',
        textAlign: 'center',
        marginBottom: 24,
    },
    button: {
        width: '100%',
        paddingVertical: 12,
    },
});
