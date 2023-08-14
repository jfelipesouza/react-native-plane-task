import React, { useState } from 'react'
import { CheckBox, StepButton, StepItemContainer, StepName } from './styled'
import { Trash2, Check, Edit } from 'lucide-react-native'
import { useTheme } from 'styled-components'

export type StepItemProps = {
  name: string
  deleteAction?: () => void
  editAction?: () => void
  selectEnabled?: boolean
}

export const StepItem: React.FC<StepItemProps> = ({
  name,
  deleteAction,
  editAction,
  selectEnabled = false
}) => {
  const { colors } = useTheme()
  const [check, setCheck] = useState(false)

  const handleSelectAction = () => {
    setCheck(prev => !prev)
  }
  return (
    <StepItemContainer
      check={check}
      disabled={!selectEnabled}
      onPress={handleSelectAction}
    >
      {selectEnabled && (
        <CheckBox check={check} onPress={handleSelectAction}>
          {check && <Check size={'100%'} color={colors.buttonText} />}
        </CheckBox>
      )}
      <StepName check={check} numberOfLines={2}>
        {name}
      </StepName>
      <StepButton disabled={check} onPress={editAction}>
        <Edit color={colors.text} size={'100%'} />
      </StepButton>
      <StepButton disabled={check} onPress={deleteAction}>
        <Trash2 color={colors.attention} size={'100%'} />
      </StepButton>
    </StepItemContainer>
  )
}
