import { useEffect, useState } from 'react';
import  {DropDownItemType} from './mainsection'
import {CountriesSectionStyle} from './style/mainsection.style'

interface CountryData{
    filteredValue:DropDownItemType;
    searchValue:string;
}
interface CountryInfo{
    name:{
        common:string,
   
    };
    altSpellings:string[]
    population:number;
    region:string;
    subregion:string;
    capital:string[];
    tld:string[];
    currencies:{
        [name:string]:{
            name: string
        }
    };
    flags:{
        png:string,
        svg:string,
        alt:string
    },
    languages:{
        [name:string]:string
    };
    borders:string[];
}
interface CleanedCountry{
    capital:string;
    name:string;
    nativeName:string;
    population:string;
    region:string;
    subregion:string;
    tld:string;
    currencies:[{name:string},{symbol:string}];
    languages:string[];
    borders:string[];
    flags:{png:string,svg:string,alt:string};
}

const Countries = ({filteredValue,searchValue}:CountryData) => {

    console.log('search value',searchValue);
    const [countries,setCountries] = useState<CleanedCountry[]>([]);
    const [loading,setLoading] = useState<Boolean>(true);
   
    //https://restcountries.com/v3.1/region// 
    //  get the countries
    const fetchCountries = async()=>{
        let API_URL:string;
        setLoading(true)
        try{
            if(filteredValue.value=='All' || filteredValue.value==='')API_URL = `https://restcountries.com/v3.1/all`
            else API_URL =`https://restcountries.com/v3.1/region/${filteredValue.value}`
         
            const response = await fetch(API_URL);
            const data = await response.json();

            const ModifiedCountries= data.map((item:CountryInfo)=>{

                let formattedCurrency =item.currencies &&  Object.values(item.currencies) ;
                let formattedLanguages = item.languages && Object.values(item.languages);
               return {
                   capital:item.capital || 'NA',
                   name:item.name.common,
                   nativeName:item.altSpellings|| item.name.common ,
                   population:item.population.toLocaleString(),
                   region:item.region,
                   subregion:item.subregion,
                   tld:item.tld,
                   currencies:formattedCurrency || [{name:''},{symbol:'NA'}],
                   languages:formattedLanguages || ['NA'],
                   borders:item.borders || ['NA'],
                   flags:item.flags

               }
            }).sort((a:CleanedCountry, b:CleanedCountry) => {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              });

             setCountries(ModifiedCountries)
             localStorage.setItem('Countries',JSON.stringify(ModifiedCountries))
             let Local:CleanedCountry[]  =JSON.parse(localStorage.getItem('Countries') as string)
             SearchCountries(searchValue,Local)
             setLoading(false)
        }catch(error){
            console.log(error);
        }
    }
    
    // this is some change 
    //fewfewfewfewfew
    // i love to eat
    const SearchCountries = (searchValue:string,arr:CleanedCountry[])=>{
        //  split this into an array
        const regex = new RegExp(searchValue,'i');
        const filteredCountries = arr.filter((item:any)=>regex.test(item.name));
        setCountries(filteredCountries)

    }

    useEffect(()=>{
         fetchCountries()
    },[filteredValue.value])

    useEffect(()=>{
      console.log('serch use effect')
      let Local:CleanedCountry[]  =JSON.parse(localStorage.getItem('Countries') as string)
      SearchCountries(searchValue,Local)
    },[searchValue])
  
    // I love yehan
    // uleg harishmotov
    return ( <CountriesSectionStyle>
        <h2>{filteredValue.value}</h2>
        <div className="country__row">
             {loading && <div>Loaing</div>}
             {(!loading && countries) && countries.map((country:CleanedCountry,index:number)=>{
                 return <div className='country' key={index}>
                    <img src={country.flags.png} alt={country.name} />
                    <div className="country__body">
                        <h3>{country.name}</h3>
                        <p><span>Population</span> {country.population}</p>
                        <p><span>Region </span> {country.region}</p>
                        <p><span>Capital </span> {country.capital}</p>
                    </div>
                 </div>
             })}
        </div>
    </CountriesSectionStyle> );
}
 
export default Countries;