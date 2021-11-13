import React from 'react'
import GlobalStyle from '../config/globalStyle'
import { darkTheme, lightTheme } from '../config/themes'
import Routes from '../config/routes'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

const ProviderStored = () => {
  const theme = useSelector(state => state.theme.value)
  return (
    <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Routes></Routes>
    </ThemeProvider>
  )
}

export default ProviderStored
