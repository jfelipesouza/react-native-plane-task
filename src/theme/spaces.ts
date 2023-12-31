import { StatusBar, Dimensions } from 'react-native'
import { RFPercentage as Percet } from 'react-native-responsive-fontsize'

const statusbarH = StatusBar.currentHeight
const { height, width } = Dimensions.get('window')

export const screenDimensions = {
  statusbarH,
  height,
  width
}

export const fontSize = {
  title: Percet(4),
  icon: Percet(3),
  headerTitle: Percet(2.7),
  taskname: Percet(2.45),
  input: Percet(2.4),
  buttonText: Percet(2.4),
  text: Percet(2.4)
}

export const space = {
  xs: Percet(0.5),
  sm: Percet(1.25),
  md: Percet(1.75),
  lg: Percet(2.5),
  xlg: Percet(3.5)
}
