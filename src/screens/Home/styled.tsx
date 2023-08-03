import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 0px ${({ theme }) => theme.space.md}px;
  padding-top: ${({ theme: { screenDimensions } }) =>
    screenDimensions.statusbarH! + 2}px;
`

export const Header = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.space.sm}px 0px;
  margin-top: ${({ theme: { screenDimensions } }) =>
    screenDimensions.height * 0.02}px;
  gap: ${({ theme }) => theme.space.md}px;
  margin-bottom: ${({ theme }) => theme.space.lg}px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`
export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.title * 0.8}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`
export const TextFieldContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.xlg}px;
`

export const Input = styled.TextInput`
  flex: 1;
  height: ${({ theme }) => theme.screenDimensions.height * 0.067}px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: ${({ theme }) => theme.space.md * 0.5}px;
  font-size: ${({ theme }) => theme.fontSize.text}px;
  padding: ${({ theme }) => theme.space.md}px;
  color: ${({ theme }) => theme.colors.inputText};
  border-color: ${({ theme }) => theme.colors.inputBorder};
  border-width: 2px;
`

export const AddButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.screenDimensions.height * 0.06}px;
  height: ${({ theme }) => theme.screenDimensions.height * 0.06}px;
  border-radius: ${({ theme }) => theme.screenDimensions.height * 0.03}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-self: center;
  align-items: center;
  justify-content: center;
`
