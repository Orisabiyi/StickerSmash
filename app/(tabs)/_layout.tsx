import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <>
      <StatusBar backgroundColor="#25292e" barStyle="light-content" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#ffd33d",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#25292e",
          },

          headerTintColor: "#fff",
          headerShadowVisible: false,
          headerShown: false,
          headerStyle: {
            backgroundColor: "#25292e",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerTitleAlign: "center",
            tabBarIcon: function ({ color, focused }) {
              return (
                <Ionicons
                  name={focused ? "home-sharp" : "home-outline"}
                  color={color}
                  size={24}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            headerTitleAlign: "center",
            tabBarIcon: function ({ color, focused }) {
              return (
                <Ionicons
                  name={
                    focused
                      ? "information-circle"
                      : "information-circle-outline"
                  }
                  color={color}
                  size={24}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
}
