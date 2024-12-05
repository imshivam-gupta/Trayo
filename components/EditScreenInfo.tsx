import React from 'react';
import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import {Colors} from '@/constants/Colors';
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";

export default function EditScreenInfo({ path }: { path: string }) {
    return (
        <ThemedView>
            <ThemedView style={styles.getStartedContainer}>
                <ThemedText
                    style={styles.getStartedText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)">
                    Open up the code for this screen:
                </ThemedText>

                <ThemedView

                    style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
                    darkColor="rgba(255,255,255,0.05)"
                    lightColor="rgba(0,0,0,0.05)">
                    <MonoText>{path}</MonoText>
                </ThemedView>

                <ThemedText
                    style={styles.getStartedText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)">
                    Change any of the text, save the file, and your app will automatically update.
                </ThemedText>
            </ThemedView>

            <ThemedView style={styles.helpContainer}>
                <ExternalLink
                    style={styles.helpLink}
                    href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
                    <ThemedText style={styles.helpLinkText} lightColor={Colors.light.tint}>
                        Tap here if your app doesn't automatically update after making changes
                    </ThemedText>
                </ExternalLink>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
});