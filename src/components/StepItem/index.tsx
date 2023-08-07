import React from 'react'
import { StepButton, StepItemContainer, StepName } from './styled'
import { Trash2 } from 'lucide-react-native'
import { useTheme } from 'styled-components'

export type StepItemProps = {
  name: string
  deleteAction?: () => void
  editAction?: () => void
}

export const StepItem: React.FC<StepItemProps> = ({
  name,
  deleteAction,
  editAction
}) => {
  const { colors } = useTheme()

  return (
    <StepItemContainer disabled={editAction !== undefined} onPress={editAction}>
      <StepName>{name}</StepName>
      <StepButton onPress={deleteAction}>
        <Trash2 color={colors.attention} size={'100%'} />
      </StepButton>
    </StepItemContainer>
  )
}
