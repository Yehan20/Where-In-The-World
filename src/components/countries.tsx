import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import  {DropDownItemType} from './mainsection'
import {CountriesSectionStyle} from './style/mainsection.style'

export interface CountryData{
    filteredValue:DropDownItemType;
    searchValue:string;
}
export interface CountryInfo{
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
export interface CleanedCountry{
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

    //console.log('search value',searchValue);


    const{countries,loading}=useFetch(filteredValue.value,searchValue)
   
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