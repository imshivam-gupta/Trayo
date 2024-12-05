import React from "react";
import {useStorageState} from "@/hooks/useStorageState";

export const AuthContext = React.createContext<{
    signIn: (userInfo: { name: string | null | undefined; email: string | null }) => void;
    signOut: () => void;
    session?: string | SigninProps | null;
    isLoading: boolean;
}>({
    signIn: (userInfo: SigninProps) => null,
    signOut: () => null,
    session: null,
    isLoading: false,
});

export type SigninProps = {
    name: string;
    email: string;
    password?: string;
}

export function SessionProvider(props: React.PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState("session");
    return (
        <AuthContext.Provider
            value={{
                signIn: (userInfo:SigninProps) => {
                    // Add your login logic here
                    // For example purposes, we'll just set a fake session in storage
                    //This likely would be a JWT token or other session data
                    return setSession(userInfo);
                },
                signOut: () => {
                    setSession(null);
                },
                session,
                isLoading,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}