import { Redirect, Stack } from 'expo-router';
import {ThemedText} from "@/components/ThemedText";
import {useSession} from "@/hooks/useSession";


export default function AppLayout() {
    const { session, isLoading } = useSession();

    if (isLoading) {
        return <ThemedText>Loading...</ThemedText>;
    }

    if (!session) {
        return <Redirect href="/login" />;
    }

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
    )
}