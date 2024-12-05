import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {Slot, Stack} from "expo-router";
import { useColorScheme } from '@/hooks/useColorScheme';
import {SupabaseProvider} from "@/context/supabase-provider";

export {
    ErrorBoundary,
} from "expo-router";


export const unstable_settings = {
    initialRouteName: "login",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        ...FontAwesome.font,
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <RootLayoutNav />
    );
}


function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <SupabaseProvider>
                {/*<Slot />*/}
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="login" />
                    <Stack.Screen
                        name="register"
                        options={{
                            presentation: 'modal',
                        }}
                    />
                </Stack>
            </SupabaseProvider>
        </ThemeProvider>
    );
}