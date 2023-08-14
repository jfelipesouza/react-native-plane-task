import React from 'react'
import { useTheme } from 'styled-components'
import { NavigationContainer, Theme } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions
} from '@react-navigation/stack'

import { StackRouters } from '../@types/routers'
import { Home } from '../screens/Home'
import { CreateTask } from '../screens/CreateTask'
import { TaskScreen } from '../screens/Task'

const { Navigator, Screen } = createStackNavigator<StackRouters>()

export const MainRouters: React.FC = () => {
  const { colors } = useTheme()
  const theme: Theme = {
    colors: {
      background: 'transparent',
      border: 'transparent',
      card: colors.backgroundCard,
      notification: colors.background,
      primary: colors.primary,
      text: colors.text
    },
    dark: true
  }

  return (
    <NavigationContainer theme={theme}>
      <Navigator screenOptions={StackConfig}>
        <Screen name="home" component={Home} />
        <Screen name="task" component={TaskScreen} />
        <Screen name="createTask" component={CreateTask} />
      </Navigator>
    </NavigationContainer>
  )
}

const StackConfig: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: true,
  cardOverlayEnabled: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  animationTypeForReplace: 'push'
}
