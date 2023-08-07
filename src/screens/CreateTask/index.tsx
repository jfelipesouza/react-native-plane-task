import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, Keyboard, View } from 'react-native'
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

type Task = {
  name: string
  key: string
}

export const CreateTask: React.FC = () => {
  const [steps, setSteps] = useState<Task[]>([])

  const { colors, space, fontSize } = useTheme()
  const modalRef = useRef<ModalContainerRefProps>(null)
  const scrollRef = useRef<ScrollView>(null)

  const openModalDrawer = () => {
    modalRef.current?.changeModalStatus()
  }

  const saveStep = () => {
    Keyboard.dismiss()
    const name = modalRef.current?.captureInputValue() as string
    if (name !== '') {
      setSteps(prev => [...prev, { name, key: Math.random().toString() }])
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

  useEffect(() => {
    console.log(steps)
  }, [steps])

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
              multiline
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
                key={item.key}
              />
            ))}
          </View>
          <SaveButton disabled={steps.length < 1}>
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
