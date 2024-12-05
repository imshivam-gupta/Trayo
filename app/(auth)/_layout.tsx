import {  Stack } from 'expo-router';

export default function AppLayout() {
console.log('AppLayout');
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            <Stack.Screen name="new-expense" options={{ presentation: 'modal' }} />
        </Stack>
    )
}