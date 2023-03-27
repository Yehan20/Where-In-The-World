import { useState } from 'react'
import './css/style.css'
import { ThemeProvider } from 'styled-components'
import NavBar from './components/navbar'
import FirstSection from './components/firstsection'
import Countries from './components/countries'
import GlobalStyle from './components/style/global.styles'
import {color} from './components/colors/colors'

function App() {
  
  const [colors,setColors]=useState({
     primary:color.White, 
     secondary:color.LightGray,
     textClr:color.VeryDarkBg,
     iconClr:color.DarkGray,
     isDark:false
    
    })
  /*
  - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
  - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
  - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
  - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
  - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
  - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
     
  */ 
  const theme = {
        primary:colors.primary,
        secondary:colors.secondary,
        textClr:colors.textClr,
        iconClr:colors.iconClr
        
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
