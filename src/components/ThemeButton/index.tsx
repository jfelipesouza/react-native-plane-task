import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { useMMKVString } from "react-native-mmkv";

import { TOKEN } from "../../services/enums/tokens";
import { Moon, Sun } from "lucide-react-native";

export const ThemeButton: React.FC = () => {
  const [theme, setTheme] = useMMKVString(TOKEN.THEME_TOKEN);
  const { colors, fontSize } = useTheme();

  const handleChangeTheme = () => {
    if (theme && theme === TOKEN.THEME_DARK) {
      setTheme(TOKEN.THEME_LIGHT);
    } else if (theme && theme === TOKEN.THEME_LIGHT) {
      setTheme(TOKEN.THEME_DARK);
    } else {
      setTheme(TOKEN.THEME_LIGHT);
    }
  };

  return (
    <TouchableOpacity onPress={handleChangeTheme}>
      {theme === TOKEN.THEME_LIGHT ? (
        <Sun size={fontSize.headerTitle} color={colors.text} />
      ) : (
        <Moon
          size={fontSize.headerTitle}
          color={colors.text}
          fill={colors.text}
        />
      )}
    </TouchableOpacity>
  );
};
