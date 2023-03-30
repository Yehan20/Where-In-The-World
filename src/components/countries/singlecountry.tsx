import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountryStyle from '../../assets/style/countrystyle';
import { CleanedCountry, currency } from '../../interfaces/countries.interface'

type SingleCountryType = {
    country: CleanedCountry;
    borderCountries: string[]
    animate: boolean;
}
const SingleCountry = ({ country, animate, borderCountries }: SingleCountryType) => {
    return (
        <CountryStyle  >
            <AnimatePresence mode='wait'>
                <div className="part__1" >
                    <motion.img src={country.flags.svg} className="large__flag" id={animate ? 'animate' : ''}

                        alt={country.name} />

                    <img src={country.flags.coatOfArms} className="coat__of__arms" alt={country.name} />
                </div>
            </AnimatePresence>
            <motion.div initial={{ opacity: 0, x: -100, }} animate={{ opacity: 1, x: 0, }} transition={{
                type: 'tween',
                duration: 0.5,
                delay: 0.5,
                ease: "easeIn",
            }} className="part__2">
                <h3>{country.name}  <img src={country.flags.coatOfArms} className="mini__logo" alt={country.name} /></h3>
                <div className="details">
                    <div>
                        <p><span>Native Name: </span> {country.nativeNames[0]}</p>
                        <p><span>Population: </span> {country.population}</p>
                        <p><span>Region: </span> {country.region}</p>
                        <p><span>Sub Region: </span> {country.subregion}</p>
                        <p><span>Capital: </span> {country.capital}</p>
                    </div>
                    <div>
                        <p><span>Top Level Domain: </span> {country.tld}</p>
                        <p><span>Currencies: </span> {country.currencies.map((money: currency) => (`${money.name}  ${money.symbol} `))}</p>
                        <p><span>Language: </span> {country.languages.join(' , ')}</p>
                    </div>
                </div>
                <div className="border__countries">
                    <span>Border Countries </span>{
                        country.borders.map((border, index) => {            
                            return <Link key={index} className='border__btn' to={`/country/${border}`}>{borderCountries[index]}</Link>
                        })
                    }
                </div>
            </motion.div>
        </CountryStyle>
    );
}

export default SingleCountry;