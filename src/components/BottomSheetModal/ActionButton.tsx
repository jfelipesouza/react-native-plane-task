import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ButtonText, ActionButton as Container } from './styled'

type ActionButtonProps = TouchableOpacityProps & {
  text: string
  type?: 'confirm' | 'cancel'
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  type,
  ...rest
}) => {
  return (
    <Container type={type} {...rest}>
      <ButtonText>{text}</ButtonText>
    </Container>
  )
}
