import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import NavBar from './components/navbar'
import MainSection from './components/mainsection'
import GlobalStyle from './components/style/global.styles'
import {color} from './components/colors/colors'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Country from './components/country'
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
    <Router>
      <ThemeProvider theme={theme}>
      <>
        <GlobalStyle/>
        <NavBar colors={colors} setColors={setColors} />
      
           <Routes>
              <Route path='/' element={<MainSection/>}/>
              <Route path='/country/:id' element={<Country/>}/>
           </Routes>
 
        {/* <MainSection /> */}
      </>
    </ThemeProvider>   
    </Router>

  )
}

export default App
