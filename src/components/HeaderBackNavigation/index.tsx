import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Pencil, ChevronLeft } from 'lucide-react-native'
import { useTheme } from 'styled-components'

import { Button, Container, LeftContainer, Title } from './styled'
import { StackRouters } from '../../@types/routers'

type HeaderBackNavigationProps = {
  title: string
  editIcon?: boolean
}

export const HeaderBackNavigation: React.FC<HeaderBackNavigationProps> = ({
  title,
  editIcon = false
}) => {
  const { colors, fontSize, space } = useTheme()
  const { goBack } = useNavigation<StackNavigationProp<StackRouters>>()

  return (
    <Container>
      <LeftContainer>
        <Button
          style={{ transform: [{ translateX: -space.xs * 1.5 }] }}
          onPress={goBack}
        >
          <ChevronLeft color={colors.text} size={fontSize.icon * 1.4} />
        </Button>
        <Title numberOfLines={1}>{title} </Title>
      </LeftContainer>
      {editIcon && (
        <Button>
          <Pencil
            fill={colors.text}
            color={colors.background}
            size={fontSize.icon * 1.1}
          />
        </Button>
      )}
    </Container>
  )
}
