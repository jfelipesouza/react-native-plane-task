import styled from 'styled-components/native'

type CheckAction = { check: boolean }

export const StepItemContainer = styled.TouchableOpacity<CheckAction>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md}px;
  opacity: ${({ check = false }) => (check ? 0.4 : 1)};
  background-color: ${({ theme: { colors } }) => colors.backgroundCard};
  padding: ${({ theme }) => `${theme.space.md}px ${theme.space.sm}px`};
  border-radius: ${({ theme }) => theme.space.sm}px;
`

export const StepName = styled.Text<CheckAction>`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.text}px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: ${({ check }) => (check ? 'line-through' : 'none')};
  text-align: justify;
`
export const StepButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.fontSize.icon}px;
  height: ${({ theme }) => theme.fontSize.icon}px;
  align-items: center;
  justify-content: center;
`
export const CheckBox = styled.TouchableOpacity<CheckAction>`
  width: ${({ theme }) => theme.fontSize.icon}px;
  height: ${({ theme }) => theme.fontSize.icon}px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ check, theme: { colors } }) =>
    check ? colors.primary : colors.text};
  border-radius: 5px;
  background-color: ${({ check, theme: { colors } }) =>
    check ? colors.primary : colors.background};
`
