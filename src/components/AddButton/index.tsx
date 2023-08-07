import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ButtonContainer } from './styled'
import { Plus } from 'lucide-react-native'
import { useTheme } from 'styled-components'

type AddButtonProps = TouchableOpacityProps & {
  size: number
  color?: string
  bgColor?: string
}

export const AddButton: React.FC<AddButtonProps> = ({
  size,
  color,
  bgColor,
  ...rest
}) => {
  const { colors } = useTheme()

  return (
    <ButtonContainer
      size={size}
      bg={bgColor ? bgColor : colors.primary}
      {...rest}
    >
      <Plus size={'60%'} color={color ? color : colors.buttonText} />
    </ButtonContainer>
  )
}
