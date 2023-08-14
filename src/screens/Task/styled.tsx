import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 0px ${({ theme }) => theme.space.md}px;
  padding-top: ${({ theme: { screenDimensions } }) =>
    screenDimensions.statusbarH! + 2}px;
  gap: ${({ theme }) => theme.space.md}px;
`

export const GenericContent = styled.View`
  gap: ${({ theme }) => theme.space.md}px;
  width: 100%;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.headerTitle}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`

export const DescriptionContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  padding: ${({ theme }) => theme.space.md}px;
  border-radius: ${({ theme }) => theme.space.sm}px;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.text}px;
  font-weight: 500;
`
