import * as SecureStore from 'expo-secure-store';
import {useCallback, useEffect} from "react";
import useAsyncState from "@/hooks/useAsyncState";
import {Platform} from "react-native";
import {SigninProps} from "@/context/authCtx";

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

export async function setStorageItemAsync(key: string, value: string | null) {
    if (Platform.OS === "web") {
        try {
            if (value === null) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, value);
            }
        } catch (e) {
            console.error("Local storage is unavailable:", e);
        }
    } else {
        if (value == null) {
            await SecureStore.deleteItemAsync(key);
        } else {
            await SecureStore.setItemAsync(key, value);
        }
    }
}

export function useStorageState(key: string): UseStateHook<string | SigninProps>  {
    const [state,setState] = useAsyncState<string>();

    useEffect(() => {
        if (Platform.OS === "web") {
            try {
                if (typeof localStorage !== "undefined") {
                    setState(localStorage.getItem(key));
                }
            } catch (e) {
                console.error("Local storage is unavailable:", e);
            }
        } else {
            SecureStore.getItemAsync(key).then((value) => {
                setState(value);
            });
        }
    }, [key]);

    const setValue = useCallback(
        (value: string | null) => {
            setState(value);
            setStorageItemAsync(key, value).then(r => console.log(r));
        },
        [key]
    );

    return [state, setValue];
}
