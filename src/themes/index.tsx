import { Dimensions } from "react-native";
import { RFPercentage as Rf } from "react-native-responsive-fontsize";

const lightColors = {
  background: "#fff",
  primary: "#4B9299",
  title: "#222",
  text: "#333",
  border: "#9fa3a8",
  inputBackgorund: "#dadada",
  ignored: "#ff0116",
  warn: "#e84707",
  success: "#008080",
  cardBackground: "#c6c6c6",
  placeholder:"#333333b5"
};

const darkColors = {
  background: "#36373B",
  primary: "#4B9299",
  title: "#fff",
  text: "#DEDEDE",
  border: "#5F6267",
  inputBackgorund: "#5F6267",
  ignored: "#E63946",
  warn: "#FFBD3E",
  success: "#20AC9B",
  cardBackground: "#464B4D",
  placeholder:"#dddddd9e"
};

const sizing = {
  xs: Rf(1),
  sm: Rf(1.2),
  md: Rf(1.5),
  lg: Rf(1.8),
  xlg: Rf(2.2),
  xxlg: Rf(3),
};

const fontSize = {
  headerTitle: Rf(3.5),
  cardTitle: Rf(2.5),
  input: Rf(2.3),
  text: Rf(2.3),
};

const dimensions = {
  w: Dimensions.get("screen").width,
  h: Dimensions.get("screen").height,
};

const themes = {
  light: {
    colors: lightColors,
    sizing,
    fontSize,
    dimensions,
  },
  dark: {
    colors: darkColors,
    sizing,
    fontSize,
    dimensions,
  },
};

export default themes;
