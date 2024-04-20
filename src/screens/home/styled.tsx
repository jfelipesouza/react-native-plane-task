import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Plus } from "lucide-react-native";
import { TaskItem } from "../../components/TaskCard";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => `${theme.sizing.xs}px ${theme.sizing.lg}px`};
  padding-top: ${({ theme }) =>
    `${theme.sizing.xs + StatusBar.currentHeight!}px`};
  gap: ${({ theme }) => theme.sizing.md}px;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSize.headerTitle}px;
  font-weight: 700;
  font-family: sans-serif;
`;

export const InlineContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  flex-direction: column;
  gap: ${({ theme }) => theme.sizing.sm}px;
`;

export const SearchInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.inputBackgorund};
  width: 80%;
  border-radius: ${({ theme }) => theme.sizing.xs}px;
  padding-left: ${({ theme }) => theme.sizing.md}px;
  padding-right: ${({ theme }) => theme.sizing.md}px;
  font-size: ${({ theme }) => theme.fontSize.input}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const AddButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.dimensions.w * 0.1}px;
  height: ${({ theme }) => theme.dimensions.w * 0.1}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.sizing.xxlg}px;
`;

export const ListItems = styled.FlatList`
  flex: 1;
`;
