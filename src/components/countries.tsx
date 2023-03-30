import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { CountriesSectionStyle } from './style/mainsection.style'
import { CountryData, CleanedCountry } from '../interfaces/countries.interface'
import { motion } from 'framer-motion'
import Loader from './loader';
// export interface CountryData{
//     filteredValue:DropDownItemType;
//     searchValue:string;
// }
// export interface CountryInfo{
//     name:{
//         common:string,
//         nativeName:{

//           [name:string]:{
//              common:string,
//              offical:string,
//           }
//         }

//     };
//     altSpellings:string[]
//     population:number;
//     cca3:string;
//     cioc:string;
//     region:string;
//     subregion:string;
//     capital:string[];
//     tld:string[];

//     currencies:{
//         [name:string]:{
//             name: string
//         }
//     };
//     flags:{
//         png:string,
//         svg:string,
//         alt:string
//     },
//     coatOfArms:{
//         svg:string
//     },
//     languages:{
//         [name:string]:string
//     };
//     borders:string[];
// }
// export interface CleanedCountry{
//     capital:string;
//     name:string;
//     code:string[];
//     population:string;
//     countryExtension:string;
//     region:string;
//     subregion:string;
//     tld:string;
//     nativeNames:{official:string,common:string}[];
//     currencies:{name:string,symbol:string}[];
//     languages:string[];
//     borders:string[];
//     flags:{png:string,svg:string,alt:string,coatOfArms:string};

// }

const Countries = ({ filteredValue, searchValue }: CountryData) => {

    //console.log('search value',searchValue);


    const { countries, loading,error } = useFetch(filteredValue.label, filteredValue.value, searchValue)
//    if(error){
//     return  <h3>Error While Fetching</h3>
//    }
    return (<CountriesSectionStyle>
        {/* <h2>{filteredValue.value}</h2> */}
        <motion.div
            className="country__row">
            {error.message && <h3>{error.message}</h3>}
            {loading  &&  <Loader/>}
            {(countries) && countries.map((country: CleanedCountry, index: number) => {
                return <motion.article key={index} initial={{ opacity: 0,  y: 100,  }}   animate={{opacity: 1,y: 0,}}  transition={{
                        type: 'tween',
                        duration: 0.5,
                        ease: "linear",
                    }}>
                    <Link title='Click to visit' to={`/country/${country.countryExtension}`} className='country'>

                        <img src={country.flags.png} alt={country.name} />
                        <div className="country__body">
                            <h3>{country.name}</h3>
                            <p><span>Population</span> {country.population}</p>
                            <p><span>Region </span> {country.region}</p>
                            <p><span>Capital </span> {country.capital}</p>
                        </div>
                    </Link>
                </motion.article>

            })}
        </motion.div>
    </CountriesSectionStyle>);
}

export default Countries;