import styled from 'styled-components'
import {color as colors} from '../colors/colors'
export const MainSectionStyle = styled.main`

  
`
export const UpperSectionStyle = styled.section`


        padding:1.5em 2em;
        display:flex;
        justify-content:space-between;
   

    .dropDown__container{
       position: relative;
       font-weight:500 ;
       min-width:200px ;
       color:${({theme})=>theme.textClr} ;
    }


    .dropDown__menu{
        display:flex ;
        justify-content:space-between ;
        align-items:center;
        background-color:${({theme})=>theme.primary} ;
        padding:1em 1.5em 1em 1.5em ;
        gap:2em;
        border-radius:0.3em;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        cursor: pointer;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .dropDown__item__head{
        position:absolute;
        background-color:${({theme})=>theme.primary} ;
        top:3.5em ;
        border-radius:0.3em;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        width:100% ;
        overflow:hidden ;
        
    }
    .dropDown__item{
        padding:0.5em 1.5em 0.1em 1.5em ;
        cursor: pointer;
     
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;

        &:hover{
            background-color:${({theme})=>theme.secondary}  ;
            opacity:0.8;
        }

    }
    .dropDown__item:last-of-type{
        padding-bottom:0.5em;
    }
    
    .search__box{
        background-color:${({theme})=>theme.primary} ;
        padding:0.9em  1em 0.9em 2em;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        display:flex;
        align-items:center ;
        gap:1.2em;
        border-radius:0.3em ;
        svg{
            color:${({theme})=>theme.iconClr} 
        }
        input{
            min-width:350px ;
            background-color:transparent ;
            border:0 ;
            color:${({theme})=>theme.iconClr} ;
            font-size:1rem ;
            &:focus{
                outline:none ;
            }

        }
        label{
            align-self: center;
            display: flex;
        }
    
    }

    

`
