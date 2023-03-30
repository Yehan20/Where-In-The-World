
export interface CountryInfo{
    name:{
        common:string,
        nativeName:{
            
          [name:string]:{
             common:string,
             offical:string,
          }
        }
   
    };
    altSpellings:string[]
    population:number;
    cca3:string;
    cioc:string;
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
    coatOfArms:{
        svg:string
    },
    languages:{
        [name:string]:string
    };
    borders:string[];
}

export interface CleanedCountry{
    capital:string;
    name:string;
    code:string[];
    population:string;
    countryExtension:string;
    region:string;
    subregion:string;
    tld:string;
    nativeNames:string[];
    currencies:{name:string,symbol:string}[];
    languages:string[];
    borders:string[];
    flags:{png:string,svg:string,alt:string,coatOfArms:string};
    
}

export interface CountryData{
    filteredValue:DropDownItemType;
    searchValue:string;
}

export interface DropDownItemType{
    label:string | '';
    value:string | '';
}

export interface currency{
    name:string;
    symbol:string;
}

export interface NavBarInterface{
    setColors:React.Dispatch<React.SetStateAction<{
       primary: string;
       secondary: string;
       textClr:string
       isDark: boolean;
       iconClr:string;
   }>>;

   colors: {
       primary: string;
       secondary: string;
       textClr:string;
       isDark: boolean;
       iconClr:string;
   }
}

export interface DropDownItemTypes{
    options:{
        value:string,
        label:string,
    };
    changeSelectedItem:React.Dispatch<React.SetStateAction<DropDownItemType>>;
    closeDropDown:()=>void;
}

export interface Color{
    iconClr:string
    
    isDark:boolean
    
    primary:string
  
    secondary:string
  
    textClr:string
  }