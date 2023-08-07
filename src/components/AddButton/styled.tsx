import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity<{
  size: number
  bg: string
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size}px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg};
`
