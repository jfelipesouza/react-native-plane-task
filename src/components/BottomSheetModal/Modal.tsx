import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { TextInput, Keyboard } from 'react-native'
import { useTheme } from 'styled-components'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { Container, Inline, TextField, Drop } from './styled'

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
    const inputRef = useRef<TextInput>(null)

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
              : withTiming(height * 0.3, { duration: 300 })
          }
        ]
      }
    })

    const changeModalStatus = useCallback(() => {
      setIsOpen(prev => !prev)

      setInputValue('')
      inputRef.current?.clear()
    }, [])

    const changeText = (text: string) => {
      setInputValue(text)
    }
    const captureInputValue = () => inputValue

    useImperativeHandle(ref, () => ({ changeModalStatus, captureInputValue }), [
      changeModalStatus,
      captureInputValue
    ])

    return (
      <Container style={animateSize}>
        <Drop />
        <TextField
          placeholderTextColor={colors.placeholder}
          placeholder="Descreva a etapa..."
          ref={inputRef}
          onChangeText={changeText}
          onSubmitEditing={onSubmitText}
        />
        {children && <Inline>{children}</Inline>}
      </Container>
    )
  }
)
export { Modal }
