import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import CountryStyle from './style/countrystyle';
import {HiArrowLongLeft} from 'react-icons/hi2'
import {currency} from '../interfaces/countries.interface'
import {motion} from 'framer-motion'
import Loader from './loader';

// interface currency{
//     name:string;
//     symbol:string;
// }

const Country = () => {
    let { id } = useParams();
    if (id === undefined) {
        id = (window.location.pathname).split('/')[2]
    }


    const { countries, loading,error } = useFetch('alpha', id, '')
    const [borderCountries,setBorderCountries]= useState<string[]>([])
    const [loader,setLoader]=useState(true);
    // const [error,setError]=useState('')
    
    // useEffect(() => {
    //     let isMounted = true;
    //     let borderCountriesFull: string[] = [];
      
    //     if (!loading && countries && countries.length > 0) {
    //       const borderArray = countries[0].borders;
      
    //       const fetchData = async () => {
    //         setLoader(true)
    //         for (let i = 0; i < borderArray.length; i++) {
    //           try {
    //             const response = await fetch(
    //               `https://restcountries.com/v3.1/alpha/${borderArray[i]}`
    //             );
    //             const data = await response.json();
    //             borderCountriesFull.push(data[0].name.common);
    //           } catch (e) {
    //             setError(e as string);
    //             setLoader(false)
    //           }
    //         }
      
        
    //           setBorderCountries(borderCountriesFull);
    //           setLoader(false)
       
    //       };
      
    //       fetchData();
    //     }
      
    //     return () => {
    //       isMounted = false;
    //     };
    //   }, [loading, countries]);

    
    // useEffect(() => {
    //     let isMounted = true;
    //     let borderCountriesFull: string[] = borderCountries;
    //     console.log('first pahese')
    //     if (!loading && countries && countries.length > 0) {
    //       const borderArray = countries[0].borders;
    //          console.log('2nd phase'); 
    //         setLoader(true)
    //         for (let i = 0; i < borderArray.length; i++) {
           
    //              fetch(
    //               `https://restcountries.com/v3.1/alpha/${borderArray[i]}`
    //             ).then(res=>res.json()).then((data)=>{
    //                 borderCountriesFull.push(data[0].name.common);
    //             }).catch((e)=>{
    //                 setError(e as string);
    //                 setLoader(false)
    //             })
       
    //           }
    //           }
           
    //           setBorderCountries(borderCountriesFull);
    //           setLoader(false)
             
    //           return () => {
    //             console.log('clean up')
    //             isMounted = false;
    //           };
    //         }, [loading, countries])   


    
useEffect(() => {
    let borderCountriesFull: string[] = [];
    
    if (!loading && countries && countries.length > 0) {
      const borderArray = countries[0].borders;
  
      setLoader(true);
      let promiseArray = borderArray.map((border) => fetch(`https://restcountries.com/v3.1/alpha/${border}`).then(res => res.json()))

      Promise.all(promiseArray)
        .then(data => {
          data.forEach(country => borderCountriesFull.push(country[0].name.common));
          setBorderCountries(borderCountriesFull);
          setLoader(false);
        })
        .catch((e) => {
          setLoader(false);
        });
    }
  }, [loading, countries]);
     


   console.log('error1');
   
    return (
        
        <> 
        <div className='go__home'><Link to={'/'} title='Go Home'><HiArrowLongLeft size={'22px'}/>Back</Link></div> 
        {loading &&   <Loader/>}
        {error.message &&   <Loader/>}
  
        {countries &&countries.map((country,index)=>{
           return <CountryStyle key={index}>
              <motion.div key={index} initial={{ opacity: 0,  y: 100,  }}   animate={{opacity: 1,y: 0,}}  transition={{
                        type: 'tween',
                        duration: 0.5,
                        ease: "linear",
                    }}  className="part__1">
                 <img src={country.flags.svg}  className="large__flag"  alt={country.name} /> 
                 <img src={country.flags.coatOfArms} className="coat__of__arms" alt={country.name} /> 
              </motion.div>
              <div className="part__2">
                 <h3>{country.name}</h3>
                 <div className="details">
                    <div>
                        <p><span>Native Name: </span> {country.nativeNames.join(',')}</p>
                        <p><span>Population: </span> {country.population}</p>
                        <p><span>Region: </span> {country.region}</p>
                        <p><span>Sub Region: </span> {country.subregion}</p>
                        <p><span>Capital: </span> {country.capital}</p>
                    </div>
                    <div>
                       <p><span>Top Level Domain: </span> {country.tld}</p>
                       <p><span>Currencies: </span> {country.currencies.map((money:currency)=>(`${money.name}  ${money.symbol} `))}</p>
                       <p><span>Language: </span> {country.languages.join(' , ')}</p>
                    </div>
                 </div>
                 <div className="border__countries">
                           <span>Border Countries </span>{
                            country.borders.map((border,index)=>{
                             console.log(borderCountries)
                           return <Link key={index} className='border__btn' to={`/country/${border}`}>{!loader? <motion.span
                             initial={{ opacity: 0,  y: -20,  }}   animate={{opacity: 1,y: 0,}}  transition={{
                            type: 'tween',
                            duration: 0.5,
                            ease: "linear",
                         }}>{borderCountries[index]}</motion.span>:'...'}</Link>
                           })
                         }
                </div>
              </div>
          </CountryStyle>
        })}
        </>
    );
}

export default Country;