import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Trash2 } from "lucide-react-native";
import { useTheme } from "styled-components/native";

import * as CardStyle from "./styled";

export type TaskItem = {
  id: number;
  title: string;
  pedding: number;
  complete: number;
  ignored: number;
};
type TaskCardProps = { item: TaskItem };

export const TaskCard: React.FC<TaskCardProps> = ({ item }) => {
  const { colors, fontSize } = useTheme();

  return (
    <CardStyle.CardContainer>
      <CardStyle.CardHeader>
        <CardStyle.CardTitle numberOfLines={1}>
          {item.title}
        </CardStyle.CardTitle>
        <TouchableOpacity>
          <Trash2 color={colors.ignored} size={fontSize.cardTitle * 1.2} />
        </TouchableOpacity>
      </CardStyle.CardHeader>
      <CardStyle.CardContent style={styles.cardContent}>
        <CardStyle.CardText type="complete">
          {item.complete} Completas
        </CardStyle.CardText>
        <CardStyle.CardText type="pedding">
          {item.pedding} Pendentes
        </CardStyle.CardText>
        <CardStyle.CardText type="ignored">
          {item.ignored} Ignoradas
        </CardStyle.CardText>
      </CardStyle.CardContent>
    </CardStyle.CardContainer>
  );
};

const styles = StyleSheet.create({
  cardContainer: {},
  cardHeader: {},
  cardContent: {},
  cardTitle: {},
  pedding: {},
  complete: {},
  ignored: {},
});
