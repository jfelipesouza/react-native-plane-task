import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  min-height: ${({ theme }) => theme.screenDimensions.height * 0.15}px;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.space.sm}px;
`

export const TopContainer = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${({ theme }) => theme.space.md}px;
`
export const TaskName = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.taskname}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  flex: 9;
`

export const BottomContainer = styled.View`
  flex: 1;
  border-top-width: 0.9px;
  border-color: ${({ theme }) => theme.colors.cardBorder};
  padding: 0px ${({ theme }) => theme.space.md}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Information = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.text}px;
  font-weight: 600;
`
export const Button = styled.TouchableOpacity`
  width: ${({ theme }) => theme.fontSize.icon}px;
  height: ${({ theme }) => theme.fontSize.icon}px;
  flex: 1;
`
