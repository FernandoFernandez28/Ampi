import { View, ViewProps, StyleProp, ViewStyle } from "react-native";

export type ThemedViewProps = ViewProps & {
    lightColour?: string;
    darkColour?: string;
};

export default function ThemedView({
    style,
    lightColour,
    darkColour
}: ThemedViewProps) {
}