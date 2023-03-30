import styled from 'styled-components'

const CountryStyle = styled.section`
  padding:1em 2em 0 2em;
 display:flex;

 color:${({theme})=>theme.textClr} ;
 .part__1{
    padding-right: 2em ;
    position:relative ;
    .large__flag{
        /* height:300px ; */
        max-height:430px ;
        min-height:350px ;
        object-fit:contain;
        min-width:550px ;
        max-width:550px ;
    }
    .coat__of__arms{
        max-width:300px ;
        margin: 2em auto ;
        position:absolute ;
        /* top:-4em; */
        right:58% ;
        transform:translateX(50%) ;
    }
 }
 .part__1,.part__2{
   flex-grow:1;
 }
 .part__2{
    padding:2em 2em ;
    display:flex;
    /* align-self:flex-start; */
    flex-direction:column;
    column-gap:1em;
 }
 h3{
    margin-top:0 ;
    font-size:1.5rem ;
    margin-bottom:1em ;
 }
 .details{ 
    p{
        margin-top:0 ;
        margin-bottom:0.5em ;
        font-weight:500 ;
    }
    display:flex;
    justify-content:space-between ;
    span {
    font-weight:600 ;
 }
}
 img{
    display:block ;
    width:100%;
 }
 .border__countries{
    margin-top:auto ;
    display:flex;
    align-items:center ;
    flex-wrap:wrap ;
    gap:1em;
    span{
      font-weight:600;
    }
 }
 .border__btn{
    display:inline-block;
    text-decoration:none;
    padding:0.3em  1em;
    background-color:${({theme})=>theme.primary} ;
    color:${({theme})=>theme.textClr};
    opacity:0.8;
    font-size:0.9rem;
    min-width:85px ;
    text-align:center;
    border-radius:0.3em;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    transition:all 250ms ease-in ;
    &:hover{
      transform:translateX(5px) ;
    }
    /* outline:1px solid ${({theme})=>theme.textClr} ; */

 }

`
export default CountryStyle