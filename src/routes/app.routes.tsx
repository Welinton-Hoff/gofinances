import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { useTheme } from "styled-components";

import { Resume } from "../screens/Resume";
import { Register } from "../screens/Register";
import { Dashboard } from "../screens/Dashboard";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarLabelPosition: "beside-icon",
    tabBarInactiveTintColor: theme.colors.TEXT,
    tabBarActiveTintColor: theme.colors.SECUNDARY_COLOR,
    tabBarStyle: {
      height: 65,
      paddingVertical: Platform.OS === "ios" ? 5 : 0,
    },
  };

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              size={size}
              color={color}
              name="format-list-bulleted"
            />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
