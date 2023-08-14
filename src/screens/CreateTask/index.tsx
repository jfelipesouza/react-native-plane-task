import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, Keyboard, View, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { HeaderBackNavigation } from '../../components/HeaderBackNavigation'
import { AddButton } from '../../components/AddButton'
import { BottomSheetModal } from '../../components/BottomSheetModal'
import { ModalContainerRefProps } from '../../components/BottomSheetModal/Modal'
import { StepItem } from '../../components/StepItem'
import {
  Container,
  TextField,
  Input,
  FormLabel,
  Division,
  Inline,
  SaveButton,
  SaveButtonText
} from './styled'
import { createNewTask } from '../../services/databases/Methods/CreateTask'
import { Step } from '../../@types/task'

export const CreateTask: React.FC = () => {
  const [steps, setSteps] = useState<Step[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [saveEnabled, setSaveEnabled] = useState(false)

  const modalRef = useRef<ModalContainerRefProps>(null)
  const scrollRef = useRef<ScrollView>(null)
  const titleRef = useRef<TextInput>(null)
  const descriptionRef = useRef<TextInput>(null)

  const { colors, space, fontSize } = useTheme()
  const navigation = useNavigation()

  const openModalDrawer = () => {
    modalRef.current?.changeModalStatus()
  }

  const saveStep = () => {
    Keyboard.dismiss()
    const name = modalRef.current?.captureInputValue() as string
    if (name !== '') {
      setSteps(prev => [
        ...prev,
        {
          name,
          status: 'pendente',
          create_at: new Date(),
          update_at: new Date()
        }
      ])
      modalRef.current?.changeModalStatus()
    }
    scrollRef.current?.scrollToEnd({ animated: true })
  }

  const cancelStep = () => {
    Keyboard.dismiss()
    modalRef.current?.changeModalStatus()
  }

  const deleteStep = (index: number) => {
    setSteps(prev => {
      const a = prev.filter((_, i) => i !== index)
      return [...a]
    })
  }

  const createTask = async () => {
    try {
      await createNewTask(title.trim(), description.trim(), steps)
      navigation.goBack()
    } catch (error) {
      console.log(`Tivemos um erro:\n ${error}`)
    }
  }

  const handleVerifyIfCanSave = () => {
    if (saveEnabled === true) {
      if (
        steps.length < 1 ||
        title.trim() === '' ||
        description.trim() === ''
      ) {
        setSaveEnabled(false)
      }
    } else {
      if (
        steps.length > 0 &&
        title.trim() !== '' &&
        description.trim() !== ''
      ) {
        setSaveEnabled(true)
      }
    }
  }

  useEffect(() => {
    handleVerifyIfCanSave()
  }, [steps.length, title, description])

  return (
    <>
      <Container>
        <ScrollView
          contentContainerStyle={{ gap: space.md, paddingBottom: space.md }}
          showsVerticalScrollIndicator={false}
          ref={scrollRef}
        >
          <HeaderBackNavigation title={'Crie a sua tarefa'} />
          <TextField>
            <FormLabel>Nome</FormLabel>
            <Input
              placeholderTextColor={colors.placeholder}
              placeholder={'Qual o nome da tarefa?'}
              multiline={false}
              onChangeText={(newTitle: string) => setTitle(newTitle)}
              onSubmitEditing={() => {
                descriptionRef.current?.focus()
              }}
              ref={titleRef}
            />
          </TextField>
          <TextField>
            <FormLabel>Descrição</FormLabel>
            <Input
              placeholder={'Descreva a sua tarefa'}
              textAlign="left"
              placeholderTextColor={colors.placeholder}
              cursorColor={colors.text}
              multiline
              onChangeText={(newDescription: string) =>
                setDescription(newDescription)
              }
              ref={descriptionRef}
            />
          </TextField>

          <Division />

          <Inline>
            <FormLabel>Etapas da tarefa</FormLabel>

            <AddButton
              size={fontSize.title}
              bgColor={colors.secundary}
              onPress={openModalDrawer}
            />
          </Inline>
          <View style={{ marginTop: space.md, gap: space.lg }}>
            {steps.map((item, index) => (
              <StepItem
                name={item.name}
                deleteAction={() => deleteStep(index)}
                key={item._id}
              />
            ))}
          </View>

          <SaveButton onPress={createTask} disabled={!saveEnabled}>
            <SaveButtonText>Salvar</SaveButtonText>
          </SaveButton>
        </ScrollView>
      </Container>
      <BottomSheetModal.Modal onSubmitText={saveStep} ref={modalRef}>
        <BottomSheetModal.Button
          onPress={saveStep}
          type="confirm"
          text="Salvar"
        />
        <BottomSheetModal.Button
          onPress={cancelStep}
          type="cancel"
          text="Cancelar"
        />
      </BottomSheetModal.Modal>
    </>
  )
}
