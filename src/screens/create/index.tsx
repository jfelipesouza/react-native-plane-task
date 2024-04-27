import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeft,
  Edit,
  PlusCircleIcon,
  Trash2Icon,
} from "lucide-react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { TextField } from "./formsComponents";
import {
  Container,
  HeaderContainer,
  HeaderTitle,
  TaskContent,
  TaskContentHeader,
  TaskContentHeaderButton,
  TaskContentHeaderText,
  TaskItem,
  TaskItemButton,
  TaskItemButtonContainer,
  TaskItemName,
} from "./styled";

type TaskItemProps = { id: string; name: string };
const TaskItemComponent: React.FC<TaskItemProps> = ({ id, name }) => {
  const { colors, fontSize } = useTheme();

  return (
    <TaskItem>
      <TaskItemName numberOfLines={1}>{name}</TaskItemName>
      <TaskItemButtonContainer>
        <TaskItemButton>
          <Edit color={colors.text} size={fontSize.text * 1.3} />
        </TaskItemButton>
        <TaskItemButton>
          <Trash2Icon color={colors.ignored} size={fontSize.text * 1.3} />
        </TaskItemButton>
      </TaskItemButtonContainer>
    </TaskItem>
  );
};

export const CreateTaskScreen: React.FC = () => {
  const { colors, fontSize, sizing } = useTheme();

  const [data, setData] = useState<TaskItemProps[]>([]);

  const navigation = useNavigation();

  const goBackScreen = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleAddNewTask = () => {
    const newData = {
      id: String(Date.now()),
      name: "Nome generico qualquer parar testar o tamanho",
    };
    console.log({
      newData,
    });
    setData((dataInfo) => [...dataInfo, newData]);
  };
  return (
    <Container>
      <HeaderContainer onPressIn={goBackScreen}>
        <ArrowLeft
          color={colors.text}
          size={fontSize.text * 1.5}
          strokeWidth={3}
        />
        <HeaderTitle weight={700}> Voltar</HeaderTitle>
      </HeaderContainer>
      <FlatList
        data={data}
        renderItem={({ item }) => <TaskItemComponent {...item} />}
        keyExtractor={({ id }) => id}
        contentContainerStyle={{ gap: 20 }}
        scrollEnabled
        scrollToOverflowEnabled
        scrollsToTop
        ListHeaderComponent={
          <TaskContent>
            <TextField
              fieldName="Nome"
              placeholder={"Dê um nome para as suas tarefas"}
            />
            <TextField
              fieldName="Nome"
              placeholder={"Dê um nome para as suas tarefas"}
            />

            <TaskContentHeader>
              <TaskContentHeaderText>Asdad</TaskContentHeaderText>
              <TaskContentHeaderButton onPressIn={handleAddNewTask}>
                <PlusCircleIcon
                  color={colors.text}
                  size={fontSize.headerTitle}
                />
              </TaskContentHeaderButton>
            </TaskContentHeader>
          </TaskContent>
        }
      />
    </Container>
  );
};
