import styled from 'styled-components/native'

export const StepItemContainer = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md}px;
`

export const StepName = styled.Text`
  flex: 9;
  font-size: ${({ theme }) => theme.fontSize.text}px;
  color: ${({ theme }) => theme.colors.text};
`
export const StepButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.fontSize.icon}px;
  height: ${({ theme }) => theme.fontSize.icon}px;
  align-items: center;
  justify-content: center;
`
