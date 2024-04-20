import "styled-components/native";

import Themes from "../themes";

const { dark, light } = Themes;

type LightTheme = typeof light;
type NightTheme = typeof dark;

declare module "styled-components/native" {
  export interface DefaultTheme extends LightTheme {}
  export interface DarkTheme extends NightTheme {}
}
