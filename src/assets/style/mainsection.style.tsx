import styled from 'styled-components'

export const MainSectionStyle = styled.main` 
`
export const UpperSectionStyle = styled.section`
        
        padding:3em 2em 1.5em 2em;
        display:flex;
        justify-content:space-between;
     


    .dropDown__container{
       position: relative;
       font-weight:600 ;
       min-width:200px ;
       color:${({theme})=>theme.textClr} ;
       z-index:33 ;
    }


    .dropDown__menu{
        display:flex ;
        justify-content:space-between ;
        align-items:center;
        background-color:${({theme})=>theme.primary} ;
        /* padding:1em 1em 1em 1em ; */
        padding: 1em 1.5em;
        gap:2em;
        h3{
          font-size:0.9rem ;
          margin:0 ;
          font-weight:600 ;
        }

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
        border-radius:0.4em;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        width:100% ;
        overflow:hidden ;
        padding-top:0.5em ;
        padding-bottom:0.5em ;
        
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
        padding:1em  1em 1em 2em;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        display:flex;
        align-items:center ;
        gap:1.2em;
        border-radius:0.3em ;
        svg{
            color:${({theme})=>theme.iconClr} 
        }
        input{
            /* min-width:350px ; */
            max-width: 600px;
            background-color:transparent ;
            border:0 ;
            color:${({theme})=>theme.iconClr} ;
            font-size:0.9rem ;
            &:focus{
                outline:none ;
            }

        }
        label{
            align-self: center;
            display: flex;
        }
    
 }  
 
 @media (max-width:48em){
        padding:1.5em 1em ;
        flex-direction:column ;
        row-gap:2.3em;
        .dropDown__container{
          align-self:flex-start ;
          .dropDown__item__head{
           top:3em ;
        }
        }
        .dropDown__menu{
          padding:1.5em 1.5em 1.5em 1.5em !important ;
        }
        .dropDown__menu,.dropDown__item{
          font-size:0.8rem ;
        }
      
        .search__box{
          max-width:500px;
          font-size:0.8rem ;
          padding:1.6em 1.6em 1.6em 1.6em !important ;
          input {
            font-size:0.8rem !important;
          }
        }
    }

    @media (min-width:1365px){
      padding:3em 4.5em 1.5em 5em ;

      .search__box{
        padding:1.2em  1em 1.2em 2em;
        min-width:470px ;
      }
    }

    @media (min-width:1600px){
      .search__box{
        input {
          font-size:1.2rem ;
        }
      }
      .dropDown__menu,.dropDown__item{
        font-size:1.2rem ;
      }
      .dropDown__item__head{
        top:4.5em ;
      }
    }
`

export const CountriesSectionStyle = styled.div`

    padding:1.5em 2em;
    .country__row{
      display:flex ;
      flex-wrap:wrap ;
      justify-content:center ;
      column-gap:3.6em;
      row-gap:4em;
    }
     article{
      max-width: 16rem;
      width: 100%;
      display:flex;
     }
    .country{
      /* min-width:16rem ; */
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      max-width:16rem ;
      flex-grow:1 ;
      width:100%;
      border-radius:0.4em ;
      overflow:hidden ;
      text-decoration:none ;
      cursor: pointer;
      background-color:${({theme})=>theme.primary} ;
      transition:transform 250ms ease-out ;
      &:hover{
        transform:translateY(-10px);
      }
      h3{
        margin-top:0 ;
        margin-bottom:0.5em;
        color:${({theme})=>theme.textClr} ;
      }
      p{
        margin:0.3em 0 ;
        font-size:0.9rem ;
        color:${({theme})=>theme.textClr} ;
      }
      span{
        font-weight:600 ;
        /* color:${({theme})=>theme.iconClr} ; */
      }
      img{
        width:100% ;
        height:160px ;
        /* object-fit:cover ; */
      }
      .country__body{
        padding:1em 1.3em 3em 1.3em ;
        
      }
    }

      
  @media (min-width:1365px){
    padding:1.5em 4.5em 1.5em 5em ;

   .country__row{
    justify-content:space-between ;
    column-gap:3.6em;

    article{
      max-width:21% ;
        .country{
        max-width:100%;
    
      }
 
    }
   
    }


   }
  
   @media (min-width:1600px){
     article {
      max-width:21rem ;
      .country {
        max-width: 21rem;
        img{
          height:200px ;
        }
        h3{
          font-size:1.5rem ;
        }
        p{
          font-size:1.2rem ;
        }
     }
    }
   }

`
