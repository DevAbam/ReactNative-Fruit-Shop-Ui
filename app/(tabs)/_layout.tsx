import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { HomeIcon } from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/solid";
import { ShoppingBagIcon } from "react-native-heroicons/solid";

type Ticons = {
  focused: boolean;
  color: string;
  size: number;
};

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Shop"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }: Ticons): React.ReactNode => (
            <HomeIcon color={"black"} size={28} />
          ),
          tabBarActiveTintColor: "green",
        }}
      />
      <Tabs.Screen
        name="Favorite"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }: Ticons): React.ReactNode => (
            <HeartIcon color={"black"} size={28} />
          ),
          tabBarActiveTintColor: "green",
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }: Ticons): React.ReactNode => (
            <ShoppingBagIcon color={"black"} size={28} />
          ),
          tabBarActiveTintColor: "green",
        }}
      />
    </Tabs>
  );
};

export default _layout;
