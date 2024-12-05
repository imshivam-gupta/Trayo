import { Session, User } from "@supabase/supabase-js";
import { useRouter, useSegments, SplashScreen } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

import { supabase } from "@/utils/supabase";
import {AppState} from "react-native";

SplashScreen.preventAutoHideAsync();

type SupabaseContextProps = {
    user: User | null;
    session: Session | null;
    initialized?: boolean;
    signUp: (email: string, password: string, name: string) => Promise<void>;
    signInWithPassword: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
};

type SupabaseProviderProps = {
    children: React.ReactNode;
};

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})

export const SupabaseContext = createContext<SupabaseContextProps>({
    user: null,
    session: null,
    initialized: false,
    signUp: async () => {},
    signInWithPassword: async () => {},
    signOut: async () => {},
});

export const useSupabase = () => useContext(SupabaseContext);

export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
    const router = useRouter();
    const segments = useSegments();
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [initialized, setInitialized] = useState<boolean>(false);

    const signUp = async (email: string, password: string,name: string) => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options:{
                data:{full_name:name}
            }
        });
        if (error) {
            throw error;
        }
    };

    const signInWithPassword = async (email: string, password: string) => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            throw error;
        }
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            throw error;
        }
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session ? session.user : null);
            setInitialized(true);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session ? session.user : null);
        });
    }, []);

    useEffect(() => {
        if (!initialized) return;

        const inProtectedGroup = segments[1] === "(tabs)";

        if (session && !inProtectedGroup) {
            router.replace("/(auth)/(tabs)");
        } else if (!session) {
            router.replace("/login");
        }


        setTimeout(() => {
            SplashScreen.hideAsync();
        }, 500);
    }, [initialized, session]);

    return (
        <SupabaseContext.Provider
            value={{
                user,
                session,
                initialized,
                signUp,
                signInWithPassword,
                signOut,
            }}
        >
            {children}
        </SupabaseContext.Provider>
    );
};