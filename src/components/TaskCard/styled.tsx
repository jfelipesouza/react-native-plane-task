import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.sizing.md}px;
  padding-top: ${({ theme }) => theme.sizing.md}px;
  padding-bottom: ${({ theme }) => theme.sizing.md}px;
`;
export const CardHeader = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.sizing.sm}px;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: ${({ theme }) => theme.sizing.xs * 0.3}px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => `${theme.sizing.xs}px ${theme.sizing.md}px`};
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.cardTitle}px;
  width: 80%;
  font-weight: 700;
`;

export const CardContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.sizing.md}px;
  padding-right: ${({ theme }) => theme.sizing.md}px;
  padding-top: ${({ theme }) => theme.sizing.md}px;
`;

type CardTextType = { type: "pedding" | "complete" | "ignored" };
export const CardText = styled.Text<CardTextType>`
  font-size: ${({ theme }) => theme.fontSize.text}px;
  color: ${({ theme: { colors }, type }) =>
    type === "complete"
      ? colors.success
      : type === "ignored"
      ? colors.ignored
      : colors.warn};

  font-weight: 600;
`;
