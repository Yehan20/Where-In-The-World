import styled from 'styled-components';

const NavBarStyled  = styled.nav`
  background-color:${({theme})=>theme.primary};
  padding:1.5em 2em;
  display:flex;
 
  align-items:center;
  justify-content:space-between;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  button{
    background-color:transparent;
    border:0;
    cursor:pointer;
    color:${({theme})=>theme.textClr};
    
    display:flex;
    align-items:center;
    gap:0.5em;
    font-family:'Nunito Sans', sans-serif;
    font-weight:600;
  }
  h1{
    color:${({theme})=>theme.textClr};
  }
  @media (max-width:48em){
    padding:1.5em 1em;
    align-items:center;
    h1{
      font-size:1.1rem ;
    }
  }
  @media (min-width:1365px){
   padding:1.5em 4.5em ;
   button{
      font-size:1rem ;
    }
  }
  @media (min-width:1600px){
    align-items:center ;
    button{
      font-size:1.5rem ;
    }
    h1{
      font-size:2rem ;
    }
  
  }
`
export default NavBarStyled