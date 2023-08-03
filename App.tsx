import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { ThemeProvider } from 'styled-components'

import { MainApplication } from './src'
import { light } from './src/theme'

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ThemeProvider theme={light}>
      <MainApplication />
    </ThemeProvider>
  )
}

export default App
