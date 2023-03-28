import { useEffect, useState } from "react";
import { CleanedCountry, CountryInfo } from '../components/countries'


const useFetch = (filteredValue: string, searchValue: string) => {

    // states
    const [countries, setCountries] = useState<CleanedCountry[]>([]);
    const [searchCountries, setSearchCountries] = useState<CleanedCountry[]>([])
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<unknown>(null);


    const SearchCountries = (searchValue: string, arr: CleanedCountry[]) => {
        //  split this into an array
        const regex = new RegExp(searchValue, 'i');
        const filteredCountries = arr.filter((item: any) => regex.test(item.name));
        setCountries(filteredCountries)

    }


    useEffect(() => {

        // Abort controllers
        const controller = new AbortController()
        const signal = controller.signal

        const fetchCountries = async () => {
            let API_URL: string;
            setLoading(true)

            try {
                if (filteredValue == 'All' || filteredValue === '') API_URL = `https://restcountries.com/v3.1/all`
                else API_URL = `https://restcountries.com/v3.1/region/${filteredValue}`

                const response = await fetch(API_URL, { signal });
                const data = await response.json();

                const ModifiedCountries = data.map((item: CountryInfo) => {

                    let formattedCurrency = item.currencies && Object.values(item.currencies);
                    let formattedLanguages = item.languages && Object.values(item.languages);
                    return {
                        capital: item.capital || 'NA',
                        name: item.name.common,
                        nativeName: item.altSpellings || item.name.common,
                        population: item.population.toLocaleString(),
                        region: item.region,
                        subregion: item.subregion,
                        tld: item.tld,
                        currencies: formattedCurrency || [{ name: '' }, { symbol: 'NA' }],
                        languages: formattedLanguages || ['NA'],
                        borders: item.borders || ['NA'],
                        flags: item.flags

                    }
                }).sort((a: CleanedCountry, b: CleanedCountry) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });

                setCountries(ModifiedCountries)
                setSearchCountries(ModifiedCountries)
                SearchCountries(searchValue, ModifiedCountries)
                setLoading(false)

            } catch (error: unknown) {

                if ((error as Error).message === 'AbortError') {
                    setError(error as Error)
                }
                else {
                    setError(error as Error)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchCountries()
        return () => {

            console.log('fetch sborted');
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
