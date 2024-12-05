import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    text: string;
}

const Divider: React.FC<Props> = ({ text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginVertical: 16,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#444',
    },
    text: {
        color: '#aaa',
        marginHorizontal: 8,
    },
});

export default Divider;
