import { View, Text, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router"; //navigation en pile

export default function _layout() {
    return (
        <Stack 
            screenOptions={{
                headerShown: false
            }}
        />
    )
}