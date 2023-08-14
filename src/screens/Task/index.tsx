import React, { useEffect, useState } from 'react'
import { SectionList, View } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'

import { StackRouters } from '../../@types/routers'
import { StepStatus, Task } from '../../@types/task'
import { HeaderBackNavigation } from '../../components/HeaderBackNavigation'
import {
  Container,
  Description,
  DescriptionContainer,
  GenericContent,
  Title
} from './styled'
import { getRealm } from '../../services/databases'
import { TASK_TABLE_NAME } from '../../services/constants'
import { StepItem } from '../../components/StepItem'

type Section = {
  title: string
  data: { name: string; _id: string }[]
}

export const TaskScreen: React.FC = () => {
  const { params } = useRoute<RouteProp<StackRouters>>()
  const [task, setTask] = useState<Task>({} as Task)
  const [sections, setSections] = useState<Section[]>([
    {
      data: [
        {
          _id: 'sdasda',
          name: 'asdasdasd'
        }
      ],
      title: 'Pendente'
    }
  ])

  const getTaskById = async (id: string) => {
    const realm = await getRealm()
    try {
      const taskInfo = realm.objectForPrimaryKey<Task>(TASK_TABLE_NAME, id)
      setTask(taskInfo as Task)

      const filter = (filter: StepStatus) => {
        const a = taskInfo?.steps.filter(item => {
          if (item.status === filter) {
            return {
              name: item.name,
              _id: item._id
            }
          }
        })
        return a ? a : []
      }
      const pending = filter('pendente')
      const complete = filter('completa')
      const ignored = filter('ignorada')

      setSections([
        {
          title: 'Pendentes',
          data: pending as any
        },
        {
          title: 'Ignoradas',
          data: ignored as any
        },
        {
          title: 'Completas',
          data: complete as any
        }
      ])
    } catch (error) {
      console.log('temos um error: ', error)
    }
  }

  useEffect(() => {
    getTaskById(params!.id)
  }, [params?.id])

  return (
    <Container>
      <HeaderBackNavigation title={task.title} />
      <SectionList
        sections={sections}
        contentContainerStyle={{
          gap: 20
        }}
        ListHeaderComponent={() => (
          <GenericContent>
            <Title>Descrição</Title>
            <DescriptionContainer>
              <Description>{task.description}</Description>
            </DescriptionContainer>
          </GenericContent>
        )}
        renderItem={({ item, index }) => (
          <StepItem
            name={item.name}
            editAction={() => {
              console.log(index)
            }}
            deleteAction={() => {
              console.log('baba')
            }}
            selectEnabled
          />
        )}
        renderSectionHeader={({ section: { title } }) => <Title>{title}</Title>}
      />
    </Container>
  )
}
