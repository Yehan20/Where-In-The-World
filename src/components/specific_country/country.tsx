import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import {HiArrowLongLeft} from 'react-icons/hi2'
import Loader from '../loader/loader';
import SingleCountry from '../countries/singlecountry';


const Country = () => {
    let { id } = useParams();
    if (id === undefined) {
        id = (window.location.pathname).split('/')[2]
    }



    const { countries, loading,error } = useFetch('alpha', id, '')
    const [borderCountries,setBorderCountries]= useState<string[]>([])
    const [loader,setLoader]=useState(true);
    const [animate,setAnimate] =useState(false)
  
 
     
    
useEffect(() => {
    let borderCountriesFull: string[] = [];
    setAnimate(false)
    // scroll(0,0);
    if (!loading && countries && countries.length > 0) {
      const borderArray = countries[0].borders;
  
      setLoader(true);
      let promiseArray = borderArray.map((border) => fetch(`https://restcountries.com/v3.1/alpha/${border}`).then(res => res.json()))

      Promise.all(promiseArray)
        .then(data => {
          data.forEach(country => borderCountriesFull.push(country[0].name.common));
          setBorderCountries(borderCountriesFull);
          setLoader(false);
          setAnimate(true)
          
        })
        .catch((e) => {
          setLoader(false);
        });
    }
    
  }, [loading, countries]);

    return (
        
        <> 
        <div id='test' className='go__home'><Link to={'/'} title='Go Home'><HiArrowLongLeft size={'22px'}/>Back</Link></div> 
        {loading &&   <Loader/>}
        {error.message && <h3>{error.message}</h3>}
        {animate && countries &&countries.map((country,index)=>{
           return  <SingleCountry key={index} borderCountries={borderCountries}  country={country} animate={animate}/>
        })}
        </>
    );
}

export default Country;