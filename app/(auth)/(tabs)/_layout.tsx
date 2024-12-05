import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { HapticTab } from "@/components/HapticTab";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    console.log('TabLayout');

    const handlePlusClick = () => {
        // Handle the screen recording logic here
        console.log('Screen recording triggered');
    };

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                        backgroundColor: '#000',
                        borderTopWidth: 1,
                        borderTopColor: '#333', // Grayish top border
                        paddingBottom: 10,
                        paddingTop: 5,
                    },
                    default: {
                        backgroundColor: '#000', // Black background
                        borderTopWidth: 1,
                        borderTopColor: '#333', // Grayish top border
                    },
                }),
            }}>

            {/* Left side icons (Dashboard & NewExpense) */}
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} color={color} name={"house"} />,
                }}
            />
            <Tabs.Screen
                name="expense"
                options={{
                    title: 'Expenses',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar" color={color} />,
                }}
            />

            {/* Middle "+" button */}
            <Tabs.Screen
                name="recording"
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        console.log('Screen recording triggered');
                        navigation.navigate('new-expense');
                    },
                })}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.plusButton}>
                            <MaterialIcons name="add" size={40} color="white" />
                        </View>
                    ),
                    title: '',
                }}
            />

            {/* Right side icons (Planner & Account) */}
            <Tabs.Screen
                name="planner"
                options={{
                    title: 'Planner',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar" color={color} />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="account-circle" color={color} />,
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    plusButton: {
        width: 60,
        height: 60,
        backgroundColor: '#4CAF50', // Green button
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0, // Elevate the button
        borderWidth: 1,
        borderColor: '#333', // Grayish border around the button
        position: 'absolute',
        bottom: 2, // Center the button vertically within the tab bar
        left: '50%', // Position in the center horizontally
        transform: [{ translateX: -30 }], // Adjust to center precisely
    },
});
