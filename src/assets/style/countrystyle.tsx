import styled from 'styled-components'

const CountryStyle = styled.div`
  padding:1em 2em 2em 2em;
  display:flex;

  
  color:${({theme})=>theme.textClr} ;
 .part__1{
    padding-right: 2em ;
    position:relative ;
    .large__flag{
        max-height:430px ;
        min-height:350px ;
        min-width:550px ;
        max-width:550px ;    
    }
    #animate{
      opacity: 0;
       transform: translateY(100px);
       /* animation: name duration timing-function delay iteration-count direction fill-mode play-state;
 */
       animation: fadeUp 500ms ease-in forwards ;
    }

      @keyframes fadeUp {
      to {
         opacity: 1;
         transform: translateY(0);
      }
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

    flex-direction:column;
    column-gap:1em;
    .mini__logo{
       width:25px;
       height:25px ;
       display:none ;
     
    }
 }
 h3{
    margin-top:0 ;
    font-size:1.5rem ;
    margin-bottom:1em ;
    display:flex ;
    align-items:center ;
    gap:0.5em
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

 @media (max-width:76em){
     
     .part__1,.part__2{
      width:100% ;
     }

     .part__2{
      padding: 2em 0em 2em 0em;
     }
     .details{
        div{
         width:50% ;
        }
     }
     .part__1 {
      .coat__of__arms{
           max-width:150px ;
           margin:0 ;
          }
      
       img.large__flag{
         min-width:auto ;
         object-fit:contain ;
       }  
   }

   @media (max-width:62em){
    
       .part__2{
         .border__countries{
            margin-top:1em ;
         }
        padding:0 ;
       }
       .part__1{
     
         .large__flag{
            min-height:250px ;
            min-width:350px !important ;
         }
          .coat__of__arms{
            position:static;
             max-width:150px ;
             transform:translateY(0);
             margin: 1em auto ;
          }
       }
  
       .details{
         flex-direction:column ;
         div{
            width:100% ;
          }

     }
   }
  }

  @media (max-width:48em){
      flex-direction:column;
      padding:0em 1.5em 2em 1.5em ;
      
      .part__2{
         margin:1em auto ;
         margin-top:2em ;
         .mini__logo{
            display:inline-block
         }
      }
      .part__1 {
         margin:1em auto ;
         padding-right:0 ;
         img.large__flag{
            object-fit:fill ;
            max-width:767px ;
            min-width:250px !important ;
         }
  
      .coat__of__arms{
            display:none ;
          }
       }
       .details{
          row-gap:2em;
       
       }
  }

  @media (min-width:1365px){
   padding:1em 4.5em 2em 4.5em;
  }

  @media (min-width:1600px){
     .part__1{
      .large__flag{
         max-height: 499px;
         max-width: 812px;
      }

     }
     .part__2{
         h3{
            font-size:1.8rem ;
          
         }
      
         .details p,.border__countries,.border__btn{
            font-size:1.4rem ;
         }
      }
  }



`
export default CountryStyle