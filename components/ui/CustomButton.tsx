import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    textColor?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

const CustomButton: React.FC<Props> = ({ title, onPress, backgroundColor = '#000', textColor = '#fff', icon, disabled }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress} disabled={disabled}>
            <View style={styles.content}>
                {icon && <View style={styles.icon}>{icon}</View>}
                <Text style={[styles.text, { color: textColor }]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderRadius: 8,
        padding: 14,
        marginVertical: 6,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomButton;
