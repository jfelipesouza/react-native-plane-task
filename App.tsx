import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { StatusBar, useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { MainApplication } from './src'
import { dark, light } from './src/theme'

const App: React.FC = () => {
  const theme = useColorScheme()

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <MainApplication />
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
    </ThemeProvider>
  )
}

export default App
