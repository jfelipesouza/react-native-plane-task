import { Plus } from "lucide-react-native";
import React, { useState } from "react";
import { useTheme } from "styled-components/native";

import { TaskCard, TaskItem } from "../../components/TaskCard";
import { ThemeButton } from "../../components/ThemeButton";
import { HOME_MOCK } from "../../services/mocks/home";
import * as HomeStyles from "./styled";

const HomeScreen: React.FC = () => {
  const { colors, fontSize, sizing } = useTheme();
  const [data, setData] = useState<TaskItem[]>(HOME_MOCK);

  return (
    <HomeStyles.Container>
      <HomeStyles.HeaderContainer>
        <HomeStyles.InlineContainer>
          <HomeStyles.HeaderTitle>Suas Tarefas</HomeStyles.HeaderTitle>
          <ThemeButton />
        </HomeStyles.InlineContainer>
        <HomeStyles.InlineContainer>
          <HomeStyles.SearchInput
            placeholder="Encontre a sua tarefa"
            placeholderTextColor={colors.text}
          />
          <HomeStyles.AddButton>
            <Plus color={"white"} fontSize={fontSize.input} />
          </HomeStyles.AddButton>
        </HomeStyles.InlineContainer>
      </HomeStyles.HeaderContainer>
      <HomeStyles.ListItems
        data={data}
        renderItem={({ item }) => <TaskCard item={item as TaskItem} />}
        ListHeaderComponent={() => (
          <HomeStyles.HeaderTitle>Tarefas pendentes</HomeStyles.HeaderTitle>
        )}
        contentContainerStyle={{
          gap: sizing.xxlg,
        }}
        showsVerticalScrollIndicator={false}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
      />
    </HomeStyles.Container>
  );
};

export { HomeScreen };

