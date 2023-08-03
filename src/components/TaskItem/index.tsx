import React from 'react'
import {
  BottomContainer,
  Button,
  Container,
  Information,
  TaskName,
  TopContainer
} from './styled'
import { useTheme } from 'styled-components'
import { Trash2 } from 'lucide-react-native'

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
  return (
    <Container>
      <TopContainer>
        <TaskName>{task.name}</TaskName>
        <Button>
          <Trash2
            /* fill={colors.attention} */ color={colors.attention}
            size={'100%'}
          />
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
