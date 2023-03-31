
import {createGlobalStyle} from "styled-components"

interface ThemeType{
    theme :{
        primary:string;
        secondary:string;
        textClr:string;
    }

 }

const GlobalStyle =createGlobalStyle`

*,*::before,*::after{
    box-sizing: border-box;

  }
  html{
    scroll-behavior:smooth;
  }
  body{
      margin: 0;                           
      min-height: 100vh;
      font-family: 'Nunito Sans', sans-serif;
      background:${({theme}:ThemeType)=>theme.secondary};
     
  }
  h1{
    margin:0;
  }


  ::placeholder{
    opacity:0.5 ;
  }
  .box{
        width:200px;
        height:200px;
        background-color:red ;
  }
    .loader {
    border: 16px solid transparent; /* Light grey */
    border-top: 16px solid ${({theme}:ThemeType)=>theme.textClr}; /* Blue */
    border-radius: 50%;
    width: 150px;
    height: 150px;
    animation: spin 2s linear infinite;
    /* background-color:red ; */
    margin: 0 auto ;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .go__home{
    padding:3em 2em 3em 2em ;
  
    a{
      /* display:inline-block; */
      text-decoration:none;
      padding:0.5em 2em 0.5em 1.5em;
      background-color:${({theme})=>theme.primary} ;
      color:${({theme})=>theme.textClr};
      opacity:0.8;
      font-size:0.9rem;
      /* max-width:150px ; */
      flex-grow:0 ;
      text-align:center;
      border-radius:0.3em;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      display:inline-flex ;
      align-items:center;
      justify-content:center ;
      gap:0.5em;
      transition:transform 250ms ease-in-out ;
      &:hover{
        transform:translateX(-5px) ;
      }
    }
    @media (max-width:48em){
      padding:3em 1.5em 3em 1.5em ;
    }

    @media (min-width:1365px){
   padding:4em 4.5em 3em 5em;
    }

    @media (min-width:1600px){
    
        a{
          font-size:1.4rem ;
        
      }
    }
 
  }
`
export default GlobalStyle;