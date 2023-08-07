import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 0px ${({ theme }) => theme.space.md}px;
  padding-top: ${({ theme: { screenDimensions } }) =>
    screenDimensions.statusbarH! + 2}px;
`

export const TextField = styled.View`
  gap: ${({ theme }) => theme.space.md}px;
`

export const FormLabel = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.text}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`

export const Input = styled.TextInput`
  min-height: ${({ theme }) => theme.screenDimensions.height * 0.067}px;
  max-height: ${({ theme }) => theme.screenDimensions.height * 0.24}px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: ${({ theme }) => theme.space.md * 0.5}px;
  font-size: ${({ theme }) => theme.fontSize.input}px;
  padding: ${({ theme }) => theme.space.md}px;
  color: ${({ theme }) => theme.colors.inputText};
  border-color: ${({ theme }) => theme.colors.inputBorder};
  border-width: 2px;
`

export const Division = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.space.xs}px;
  margin-top: ${({ theme }) => theme.space.lg}px;
  margin-bottom: ${({ theme }) => theme.space.xs}px;
`

export const Inline = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SaveButton = styled.TouchableOpacity`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabledButton : theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space.xlg * 1.5}px;
  margin-bottom: ${({ theme }) => theme.space.md}px;
  padding-top: ${({ theme }) => theme.space.md}px;
  padding-bottom: ${({ theme }) => theme.space.md}px;
  border-radius: ${({ theme }) => theme.space.sm}px;
  bottom: 0;
`

export const SaveButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.buttonText}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.buttonText};
`
