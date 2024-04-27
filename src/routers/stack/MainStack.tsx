import {
  CardStyleInterpolators,
  StackNavigationOptions,
  TransitionSpecs,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";

import { useTheme } from "styled-components/native";
import { CreateTaskScreen } from "../../screens/create";
import { HomeScreen } from "../../screens/home";

const { Navigator, Screen } = createStackNavigator();



export const MainStackNavigation = () => {

  const {colors} = useTheme()

  const config: StackNavigationOptions = {
    headerShown: false,
    animationEnabled:true,
    cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
    gestureDirection:"horizontal",
    cardStyle:{backgroundColor:colors.background},
    transitionSpec:{
      open:TransitionSpecs.TransitionIOSSpec,
      close:TransitionSpecs.BottomSheetSlideOutSpec,
    }
  };

  return (
    <Navigator screenOptions={config} initialRouteName="home" >
      <Screen name="home" component={HomeScreen} />
      <Screen name="create" component={CreateTaskScreen} />
    </Navigator>
  );
};
