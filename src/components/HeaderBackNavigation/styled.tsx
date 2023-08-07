import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.space.md}px;
  margin-bottom: ${({ theme }) => theme.space.lg}px;
`

export const LeftContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.space.sm}px;
  align-items: center;
  flex: 10;
`

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.headerTitle}px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  margin-right: ${({ theme }) => theme.space.sm}px;
  flex: 9;
`
