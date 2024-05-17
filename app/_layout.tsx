import { View, Text } from "react-native";
import React from "react";
import { Stack, router, useLocalSearchParams } from "expo-router";

const Rootlayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default Rootlayout;
