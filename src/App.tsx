import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import NavBar from './components/navbar/navbar'
import GlobalStyle from './assets/style/global.styles'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import CountryPage from './components/specific_country/country'
import { color } from './data/colors'
import {Color} from './interfaces/countries.interface'
import HomePage from './components/homecomponent/homepage'


function App() {
  
  // Initaly add data from the file 
  const [colors,setColors]=useState({
     primary:color.White, 
     secondary:color.LightGray,
     textClr:color.VeryDarkBg,
     iconClr:color.DarkGray,
     isDark:false  
  })
  
  // check local stage to update the state
  useEffect(()=>{
    let local:string|null = (localStorage.getItem('colors')) 
    let parsedColors:Color|null =null;

     if (local !== null) {
     parsedColors = JSON.parse(local) as Color;
     setColors({...parsedColors})
    }

 },[])

  // theme will change 
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
              <Route path='/' element={<HomePage/>}/>
              <Route path='/country/:id' element={<CountryPage/>}/>
           </Routes>
       </>
    </ThemeProvider>   
    </Router>
  )
}

export default App
