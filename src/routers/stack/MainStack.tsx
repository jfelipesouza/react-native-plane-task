import React from "react";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";

import { HomeScreen } from "../../screens/home";

const { Navigator, Screen } = createStackNavigator();

const config: StackNavigationOptions = {
  headerShown: false,
};

export const MainStackNavigation = () => {
  return (
    <Navigator screenOptions={config}>
      <Screen name="home" component={HomeScreen} />
    </Navigator>
  );
};
