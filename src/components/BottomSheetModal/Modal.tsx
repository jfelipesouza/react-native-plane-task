import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { TextInput, Text } from 'react-native'
import { useTheme } from 'styled-components'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import {
  Container,
  Inline,
  TextField,
  Drop,
  InputContainer,
  InputCount
} from './styled'

export type ModalContainerProps = {
  children?: React.ReactNode
  onSubmitText?: () => void
}
export type ModalContainerRefProps = {
  changeModalStatus: () => void
  captureInputValue: () => string
}
const Modal = React.forwardRef<ModalContainerRefProps, ModalContainerProps>(
  ({ children, onSubmitText }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [count, setCount] = useState(0)
    const inputRef = useRef<TextInput>(null)

    const MAX_SIZE_INPUT = 50

    const {
      colors,
      screenDimensions: { height }
    } = useTheme()

    const animateSize = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: isOpen
              ? withTiming(0, { duration: 400 })
              : withTiming(height * 0.4, { duration: 300 })
          }
        ]
      }
    })

    const changeModalStatus = useCallback(() => {
      setIsOpen(prev => !prev)

      setInputValue('')
      inputRef.current?.clear()
      setCount(0)
    }, [])

    const changeText = (text: string) => {
      setInputValue(text)
      setCount(text.length)
    }
    const captureInputValue = () => inputValue

    useImperativeHandle(ref, () => ({ changeModalStatus, captureInputValue }), [
      changeModalStatus,
      captureInputValue
    ])

    return (
      <Container style={animateSize}>
        <Drop />
        <InputContainer>
          <TextField
            placeholderTextColor={colors.placeholder}
            placeholder="Descreva a etapa..."
            ref={inputRef}
            onChangeText={changeText}
            onSubmitEditing={onSubmitText}
            maxLength={MAX_SIZE_INPUT}
          />
          <InputCount>
            {count}/{MAX_SIZE_INPUT}
          </InputCount>
        </InputContainer>
        {children && <Inline>{children}</Inline>}
      </Container>
    )
  }
)
export { Modal }
