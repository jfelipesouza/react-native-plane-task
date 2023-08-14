import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

export const Container = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.modal};
  height: ${({ theme: { screenDimensions } }) =>
    screenDimensions.height * 0.4}px;
  width: ${({ theme: { screenDimensions } }) => screenDimensions.width}px;

  border-top-left-radius: ${({ theme }) => theme.space.lg}px;
  border-top-right-radius: ${({ theme }) => theme.space.lg}px;
  padding-left: ${({ theme }) => theme.space.md}px;
  padding-right: ${({ theme }) => theme.space.md}px;
  justify-content: center;
`

export const Inline = styled.View`
  flex-direction: row;
  width: 100%;
  gap: ${({ theme }) => theme.space.md}px;
  top: ${({ theme }) => theme.space.xlg}px;
`
export const TextField = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: ${({ theme }) => theme.space.xs}px;
  font-size: ${({ theme }) => theme.fontSize.input}px;
  padding: ${({ theme }) => `${theme.space.md}px ${theme.space.md}px`};
  color: ${({ theme }) => theme.colors.inputText};
`
export const InputContainer = styled.View`
  gap: 10px;
`

export const InputCount = styled.Text`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSize.text}px;
`
type ActionButtonProps = {
  type?: 'confirm' | 'cancel'
}

export const ActionButton = styled.TouchableOpacity<ActionButtonProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: ${({ theme: { screenDimensions } }) =>
    screenDimensions.height * 0.07}px;

  gap: ${({ theme }) => theme.space.md}px;
  border-radius: ${({ theme }) => theme.space.xs * 2}px;
  background-color: ${({ theme, type = 'confirm', disabled }) =>
    disabled
      ? theme.colors.disabledButton
      : type === 'confirm'
      ? theme.colors.primary
      : theme.colors.attention};
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSize.buttonText}px;
  font-weight: 700;
`

export const Drop = styled.View`
  background-color: #ebebeb;
  width: ${({ theme }) => theme.space.xlg * 3}px;
  height: ${({ theme }) => theme.space.sm / 2}px;
  align-self: center;
  margin-top: ${({ theme }) => theme.space.md}px;
  border-radius: ${({ theme }) => theme.space.xs}px;
  position: absolute;
  top: 0;
`
