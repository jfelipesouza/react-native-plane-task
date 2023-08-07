import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions
} from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { CreateTask } from '../screens/CreateTask'
import { StackRouters } from '../@types/routers'
import { Task } from '../screens/Task'

const { Navigator, Screen } = createStackNavigator<StackRouters>()

export const MainRouters: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={StackConfig}>
        <Screen name="home" component={Home} />
        <Screen name="task" component={Task} />
        <Screen name="createTask" component={CreateTask} />
      </Navigator>
    </NavigationContainer>
  )
}

const StackConfig: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}
