import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { CountriesSectionStyle } from '../../assets/style/mainsection.style'
import { CountryData, CleanedCountry } from '../../interfaces/countries.interface'
import { motion,AnimatePresence} from 'framer-motion'
import Loader from '../loader/loader';


const Countries = ({ filteredValue, searchValue }: CountryData) => {


    const { countries, loading,error } = useFetch(filteredValue.label, filteredValue.value, searchValue)

    return (
      <CountriesSectionStyle>
  
         <div className="country__row">
         {error.message && <h3>{error.message}</h3>}
         {loading  &&  <Loader/>}
        </div>
        <AnimatePresence mode='wait'>
        <motion.div className="country__row"  initial={{ opacity: 0,  y: 120,  }}   animate={{opacity: 1,y: 0,}}  transition={{           
                type:'tween',
                duration: 1,
                ease: "linear",
            }}>
             {!loading && countries.length===0 && <h3>No Results</h3>}   
            {(countries) && countries.map((country: CleanedCountry, index: number) => {
                return <article key={index}>
                    <Link title='Click to visit' to={`/country/${country.countryExtension}`} className='country'>

                        <img src={country.flags.png} alt={country.name} />
                        <div className="country__body">
                            <h3>{country.name}</h3>
                            <p><span>Population</span> {country.population}</p>
                            <p><span>Region </span> {country.region}</p>
                            <p><span>Capital </span> {country.capital}</p>
                        </div>
                    </Link>
                </article>

            })}
        </motion.div>    
        </AnimatePresence>   
     
       
</CountriesSectionStyle>);
}

export default Countries;