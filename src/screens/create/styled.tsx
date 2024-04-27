import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.sizing.md}px;
  padding-top: ${({ theme }) =>
    `${theme.sizing.xxlg + StatusBar.currentHeight!}px`};
  gap: ${({ theme }) => theme.sizing.xlg}px;
`;

export const HeaderContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

type TitleWeight = { weight?: 500 | 700 | 800 | 900 | 600 };

export const HeaderTitle = styled.Text<TitleWeight>`
  font-size: ${({ theme }) => theme.fontSize.headerTitle * 0.9}px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ weight = 700 }) => weight};
`;

export const TextFieldContainer = styled.View`
  position: relative;
  width: 100%;
  gap: ${({ theme }) => theme.sizing.sm}px;
`;

export const TextFieldLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.text * 1.1}px;
  padding-left: 2px;
  font-weight: 600;
`;

export const TextFieldInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.inputBackgorund};
  border-radius: ${({ theme }) => theme.sizing.xs}px;
  font-size: ${({ theme }) => theme.fontSize.input}px;
  padding-left: ${({ theme }) => theme.sizing.md}px;
  padding-right: ${({ theme }) => theme.sizing.md}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TaskContent = styled.View`
  gap: ${({ theme }) => theme.sizing.md}px;
`;

export const TaskContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizing.sm}px;
  margin-top: ${({ theme }) => theme.sizing.lg}px;
`;
export const TaskContentHeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.text * 1.1}px;
  font-weight: 700;
`;
export const TaskContentHeaderButton = styled.TouchableOpacity``;

export const TaskItem = styled.View`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  width: 100%;
  height: ${({ theme }) => theme.dimensions.h * 0.06}px;
  border-radius: ${({ theme }) => theme.sizing.sm}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.sizing.md}px;
`;

export const TaskItemName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.text}px;
  font-weight: 700;
  width: 83%;
`;

export const TaskItemButtonContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.sizing.sm}px;
`;

export const TaskItemButton = styled.TouchableOpacity``;
