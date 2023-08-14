import React, { useState, useRef, useCallback } from 'react'
import { FlatList, TextInput } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
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
import { TaskItem } from '../../components/TaskItem'
import { AddButton } from '../../components/AddButton'

import { StackRouters } from '../../@types/routers'
import { Task, TaskItem as TaskItemProps } from '../../@types/task'
import { TASK_HOME_MOCK } from '../../services/mocks'
import { getRealm } from '../../services/databases'

export const Home: React.FC = () => {
  const { colors, space } = useTheme()
  const { navigate } = useNavigation<StackNavigationProp<StackRouters>>()
  const inputRef = useRef<TextInput>(null)
  const [tasks, setTasks] = useState<TaskItemProps[]>([])

  const navigation = () => {
    navigate('createTask')
  }

  const filterList = (value: string) => {
    if (value !== '') {
      setTasks(prev => {
        const newList = prev.filter(item =>
          item.title.toUpperCase().includes(value.toUpperCase())
        )
        return newList
      })
    } else {
      setTasks(TASK_HOME_MOCK)
    }
  }

  const searchAllTasks = async () => {
    try {
      const realm = await getRealm()
      const all = realm.objects<Task>('Tasks')
      setTasks(TASK_HOME_MOCK)
      filterStepsInTasks(all as any)
    } catch (error) {
      console.log(error)
    } finally {
      console.log('final')
    }
  }

  const filterStepsInTasks = (tasks: Task[]) => {
    const filteredTasks: TaskItemProps[] = tasks.map(item => {
      const complete = item.steps.filter(
        value => value.status === 'completa'
      ).length
      const pending = item.steps.filter(
        value => value.status === 'pendente'
      ).length
      const ignored = item.steps.filter(
        value => value.status === 'ignorada'
      ).length

      const saida: TaskItemProps = {
        _id: item._id,
        title: item.title,
        complete,
        ignored,
        pending
      }
      return saida
    })
    setTasks(filteredTasks)
  }

  useFocusEffect(
    useCallback(() => {
      const init = async () => {
        console.log('Abrindo instancia no banco')
        inputRef.current?.clear()
        await searchAllTasks()
      }

      init()
    }, [])
  )

  return (
    <Container>
      <Header>
        <Title>Tarefas</Title>
        <TextFieldContainer>
          <Input
            placeholder="Encontre a sua tarefa..."
            placeholderTextColor={colors.placeholder}
            cursorColor={colors.text}
            onChangeText={filterList}
            ref={inputRef}
          />
          <AddButton
            size={40}
            bgColor={colors.secundary}
            onPress={navigation}
            activeOpacity={0.5}
          />
        </TextFieldContainer>
      </Header>
      <Subtitle>Lista de atividades</Subtitle>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item: TaskItemProps) => item._id}
        style={{ flex: 1 }}
        contentContainerStyle={{
          gap: space.xlg,
          paddingBottom: 20,
          paddingTop: 10
        }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
