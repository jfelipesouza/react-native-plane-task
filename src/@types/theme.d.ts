import 'styled-components'
import { dark, light } from '../theme'

type LightTheme = typeof light
type NightTheme = typeof dark

declare module 'styled-components' {
  export interface DefaultTheme extends LightTheme {}
  export interface DarkTheme extends NightTheme {}
}
