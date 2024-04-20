import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigation } from "./stack/MainStack";

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
};
