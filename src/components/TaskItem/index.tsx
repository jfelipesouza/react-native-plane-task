import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTheme } from 'styled-components'
import { Trash2 } from 'lucide-react-native'
import {
  BottomContainer,
  Button,
  Container,
  Information,
  TaskName,
  TopContainer
} from './styled'
import { StackRouters } from '../../@types/routers'

export type Task = {
  id: String
  name: string
  completed: number
  pending: number
  ignored: number
}

type TaskItemProp = {
  task: Task
}

export const TaskItem: React.FC<TaskItemProp> = ({ task }) => {
  const { colors } = useTheme()
  const { navigate } = useNavigation<StackNavigationProp<StackRouters>>()

  const navigation = () => {
    navigate('task', { id: task.id.toString(), taskName: task.name })
  }

  return (
    <Container onPress={navigation}>
      <TopContainer>
        <TaskName numberOfLines={2}>{task.name}</TaskName>
        <Button>
          <Trash2 color={colors.attention} size={'100%'} />
        </Button>
      </TopContainer>
      <BottomContainer>
        <Information style={{ color: colors.success }}>
          {task.completed} completed
        </Information>
        <Information style={{ color: colors.warn }}>
          {task.pending} pending
        </Information>
        <Information style={{ color: colors.attention }}>
          {task.ignored} ignored
        </Information>
      </BottomContainer>
    </Container>
  )
}
