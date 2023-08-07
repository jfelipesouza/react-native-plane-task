import React, { useState } from 'react'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'

import { Container } from './styled'
import { HeaderBackNavigation } from '../../components/HeaderBackNavigation'
import { StackRouters } from '../../@types/routers'

// import { Container } from './styles';

export const Task: React.FC = () => {
  const router = useRoute<RouteProp<StackRouters>>()
  const { goBack } = useNavigation()

  return (
    <Container>
      <HeaderBackNavigation title={router.params!.taskName} editIcon />
    </Container>
  )
}
