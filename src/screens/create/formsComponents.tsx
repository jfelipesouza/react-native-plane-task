import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { TextFieldContainer, TextFieldInput, TextFieldLabel } from "./styled";

type TextFieldProps = TextInputProps & { fieldName: string };
export const TextField: React.FC<TextFieldProps> = ({
  fieldName,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <TextFieldContainer>
      <TextFieldLabel>{fieldName}</TextFieldLabel>
      <TextFieldInput
        placeholderTextColor={colors.placeholder}
        numberOfLines={1}
        {...props}
      />
    </TextFieldContainer>
  );
};
