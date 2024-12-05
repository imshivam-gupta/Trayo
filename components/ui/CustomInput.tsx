import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const CustomInput: React.FC<Props> = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#aaa"
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry && !isPasswordVisible} // Toggle password visibility
            />
            {secureTextEntry && (
                <TouchableOpacity
                    onPress={() => setPasswordVisible((prev) => !prev)}
                    style={styles.iconContainer}
                >
                    <Ionicons
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={20}
                        color="#aaa"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#222',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
        paddingHorizontal: 12,
        marginVertical: 8,
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        paddingVertical: 12,
    },
    iconContainer: {
        marginLeft: 8,
    },
});

export default CustomInput;
