import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTheme } from 'styled-components'

import {
  Container,
  Header,
  Input,
  Subtitle,
  TextFieldContainer,
  Title
} from './styled'
import { Task, TaskItem } from '../../components/TaskItem'
import { StackRouters } from '../../@types/routers'
import { AddButton } from '../../components/AddButton'

export const Home: React.FC = () => {
  const { colors, space } = useTheme()
  const { navigate } = useNavigation<StackNavigationProp<StackRouters>>()
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: Math.random().toString(),
      name: 'Desenvolver nova aplicação',
      completed: 4,
      pending: 3,
      ignored: 10
    },
    {
      id: Math.random().toString(),
      name: 'Atualizar o github',
      completed: 2,
      pending: 19,
      ignored: 3
    },
    {
      id: Math.random().toString(),
      name: 'Ir ao Shopping',
      completed: 0,
      pending: 13,
      ignored: 0
    },
    {
      id: Math.random().toString(),
      name: 'Desenvolver nova aplicação para android ',
      completed: 4,
      pending: 3,
      ignored: 10
    },
    {
      id: Math.random().toString(),
      name: 'Desenvolver nova aplicação para ios ',
      completed: 4,
      pending: 5,
      ignored: 2
    }
  ])

  const navigation = () => {
    navigate('createTask')
  }

  return (
    <Container>
      <Header>
        <Title>Tarefas</Title>
        <TextFieldContainer>
          <Input
            placeholder="Encontre a sua tarefa..."
            placeholderTextColor={colors.placeholder}
            cursorColor={colors.text}
          />
          <AddButton
            size={40}
            bgColor={colors.secundary}
            onPress={navigation}
            activeOpacity={0.5}
          />
        </TextFieldContainer>
      </Header>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item: any) => item.id}
        style={{ flex: 1 }}
        ListHeaderComponent={() => <Subtitle>Lista de atividades</Subtitle>}
        contentContainerStyle={{ gap: space.xlg, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
