import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { useMMKVString } from "react-native-mmkv";
import { AppNavigation } from "./routers";
import { TOKEN } from "./services/enums/tokens";
import themes from "./themes";

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

