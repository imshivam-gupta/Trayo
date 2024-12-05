import {ThemedText, ThemedTextProps} from "@/components/ThemedText";

export function MonoText(props: ThemedTextProps) {
    return <ThemedText {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}