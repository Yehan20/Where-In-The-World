import { useEffect, useState } from 'react';
import  {DropDownItemType} from './mainsection'
interface CountryData{
    filteredValue:DropDownItemType
}
interface CountryInfo{
    name:{
        common:string,
   
    };
    altSpellings:string[]
    populaton:number;
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
const Countries = ({filteredValue}:CountryData) => {
    const [countries,setCountries] = useState<[]>([]);
   
    //https://restcountries.com/v3.1/region// 
    const fetchCountries = async()=>{
        try{
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();

            const modifedData= data.map((item:CountryInfo,index:number)=>{

                let formattedCurrency =item.currencies &&  Object.values(item.currencies) ;
                let formattedLanguages = item.languages && Object.values(item.languages);
               return {
                   capital:item.capital || 'NA',
                   name:item.name.common,
                   nativeName:item.altSpellings|| item.name.common ,
                   population:item.populaton,
                   region:item.region,
                   subregion:item.subregion,
                   tld:item.tld,
                   currencies:formattedCurrency || [{name:''},{symbol:'NA'}],
                   languages:formattedLanguages || ['NA'],
                   borders:item.borders || ['NA'],
                   flags:item.flags

               }
            })
             setCountries(modifedData)
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
         fetchCountries()
    },[])
    return ( <section>
        <h2>{filteredValue.value}</h2>
        <div className="country__row">
             {countries.map((country:any)=>{
                 return <div>
                    <img src={country.flags.png} alt={country.name} />
                    <h3>{country.name}</h3>
                    <p>Population {country.population}</p>
                    <p>Region {country.region}</p>
                    <p>Capital {country.capital}</p>
                 </div>
             })}
        </div>
    </section> );
}
 
export default Countries;