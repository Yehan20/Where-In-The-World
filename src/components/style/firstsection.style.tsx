import styled from 'styled-components'
import {color as colors} from '../colors/colors'
const FirstSectionStyle = styled.section`
    padding:1.5em 2em;
    display:flex;
    justify-content:space-between;

    .dropDown__menu{
        display:flex ;
        align-items:center;
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
            font-size:0.8rem ;
            &:focus{
                outline:none ;
            }

        }
        label{
            align-self: center;
            display: flex;
        }
    
    }
    select{
            background-color:transparent ;
            border:0 ;
            box-shadow: 0 3px 8px rgb(0 0 0 / 0.2);
            padding:0 2em ;
            border-radius:0.3em ;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
        }
    
`
export default FirstSectionStyle;