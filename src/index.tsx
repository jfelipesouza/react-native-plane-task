import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { AppNavigation } from "./routers";
import themes from "./themes";
import { useMMKVString } from "react-native-mmkv";
import { TOKEN } from "./services/enums/tokens";

const MyApp = () => {
  const [theme, setTheme] = useState(themes.light);
  const [currentTheme] = useMMKVString(TOKEN.THEME_TOKEN);

  useEffect(() => {
    if (currentTheme === TOKEN.THEME_LIGHT) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  }, [currentTheme]);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={
          currentTheme === TOKEN.THEME_DARK ? "light-content" : "dark-content"
        }
        translucent
      />
      <AppNavigation />
    </ThemeProvider>
  );
};

export { MyApp as App };
