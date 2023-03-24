import React from "react";
import {createGlobalStyle} from "styled-components"

interface ThemeType{
    theme :{
        primary:string,
        secondary:string
    }

   

 }

const GlobalStyle =createGlobalStyle`

*,*::before,*::after{
    box-sizing: border-box;
  }
  body{
      margin: 0;
      min-height: 100vh;
      font-family: 'Nunito Sans', sans-serif;
      background:${({theme}:ThemeType)=>theme.primary}
  }
`
export default GlobalStyle;