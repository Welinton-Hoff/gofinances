import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} options={screenOptions} />
    </Navigator>
  );
}
