import { useState } from 'react'
import './css/style.css'
import { ThemeProvider } from 'styled-components'
import NavBar from './components/navbar'
import FirstSection from './components/firstsection'
import Countries from './components/countries'
import GlobalStyle from './components/style/global.styles'

function App() {
  
  const [colors,setColors]=useState({ primary: 'red', secondary: 'green',isDark:false })
 
  const theme = {
        primary:colors.primary,
        secondary:colors.secondary
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle/>
        <NavBar colors={colors} setColors={setColors} />
        <FirstSection />
        <Countries />
      </>
    </ThemeProvider>
  )
}

export default App
