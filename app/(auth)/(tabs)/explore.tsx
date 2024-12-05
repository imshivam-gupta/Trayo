import {StyleSheet, Image, Platform, Button} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useSession} from "@/hooks/useSession";
import EditScreenInfo from "@/components/EditScreenInfo";

export default function TabTwoScreen() {
    const { signOut, session } = useSession();
    console.log(session);
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Tab One</ThemedText>
            <ThemedText>Welcome, {session?.name}</ThemedText>
            <ThemedView
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <EditScreenInfo path="app/(auth)/(tabs)/index.tsx" />
            <Button
                title="Sign Out"
                onPress={() => {
                    // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
                    signOut();
                }}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});