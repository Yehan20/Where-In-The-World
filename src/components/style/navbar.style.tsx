import styled from 'styled-components';

const NavBarStyled  = styled.nav`
  background-color:${({theme})=>theme.primary};
  padding:1.5em 2em;
  display:flex;
 
  align-items:flex-start;
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
`
export default NavBarStyled