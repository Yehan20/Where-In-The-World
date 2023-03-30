import { useEffect, useState } from "react";
import {CleanedCountry,CountryInfo} from '../interfaces/countries.interface'
type MyError= {
    message: string;
    statusCode?:null | number;
  }

const useFetch = (region:string,filteredValue: string, searchValue: string) => {

    // states
    const [countries, setCountries] = useState<CleanedCountry[]>([]);
    const [searchCountries, setSearchCountries] = useState<CleanedCountry[]>([])
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<MyError>({ message: "", statusCode: null });
    
   

    const SearchCountries = (searchValue: string, arr: CleanedCountry[]) => {
        //  split this into an array
        const regex = new RegExp(searchValue, 'i');
        const filteredCountries = arr.filter((item:CleanedCountry) => regex.test(item.name)); // searchng using the regex
        setCountries(filteredCountries)

    }

    useEffect(() => {
        console.log('hook ran');
        let isMounted = true
        // Abort controllers

        const controller = new AbortController()
        const signal = controller.signal

        const fetchCountries = async () => {
            let API_URL: string;
       
            console.log('called')
          

            try {
                if (filteredValue == 'All' || filteredValue === '') API_URL = `https://restcountries.com/v3.1/all`
                else if (region==='alpha') API_URL= `https://restcountries.com/v3.1/alpha/${filteredValue}`
                else API_URL = `https://restcountries.com/v3.1/${region}/${filteredValue}`

                const response = await fetch(API_URL, { signal });
                const data = await response.json();

                const ModifiedCountries:CleanedCountry[] = data.map((item: CountryInfo) => {

                    // the data i need to pre format before  sending it 
                    let formattedCurrency = item.currencies && Object.values(item.currencies);
                    let formattedLanguages = item.languages && Object.values(item.languages);
                    let formattedNativeName =region ==='alpha'?(Object.values(item.name.nativeName)).map(item=>item.common) :['']
                    return {
                        capital: item.capital || 'NA',
                        name: item.name.common,
                        code: [item.altSpellings[0] || item.name.common],
                        countryExtension:item.cca3 || item.cioc,
                        population: item.population.toLocaleString(),
                        region: item.region,
                        subregion: item.subregion || 'NA',
                        nativeNames:formattedNativeName,
                        tld: item.tld,
                        currencies: formattedCurrency || [{ name: 'NA' , symbol: 'NA' }],
                        languages: formattedLanguages || ['NA'],
                        borders: item.borders || [],
                        flags: {...item.flags,coatOfArms:item.coatOfArms.svg || 'NA'}

                    }
                }).sort((a: CleanedCountry, b: CleanedCountry) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                }); 
                    
                setCountries(ModifiedCountries)
                setSearchCountries(ModifiedCountries)
                SearchCountries(searchValue, ModifiedCountries)
                setLoading(false)
                setError({ message:'', statusCode:null })
          

            } catch (error:unknown) {
                if(error instanceof Error && isMounted){
                    
                     const myError: MyError = { message: error.message};
                   
                        setError(myError);
                        setLoading(false)                  
                }
               
            }
        }

        fetchCountries()
        return () => {

            //console.log('fetch sborted');
            isMounted=false
            controller.abort()
        }

    }, [filteredValue])


    useEffect(() => {
        SearchCountries(searchValue, searchCountries)
    }, [searchValue])

    return {
        countries, loading, error
    }
}
export default useFetch;
