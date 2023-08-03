import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 0px ${({ theme }) => theme.space.md}px;
  padding-top: ${({ theme: { screenDimensions } }) =>
    screenDimensions.statusbarH! + 2}px;
`
