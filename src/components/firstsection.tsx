import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa'
import FirstSectionStyle from './style/firstsection.style';
import { FaAngleDown } from 'react-icons/fa';
import DropDownItem from './dropdownitem';

export type DropDownItemType={
    label:string | '';
    value:string | '';
}

const FirstSection = () => {

    const dropDownlist:DropDownItemType[]=[
        // {label:'Filter By Region',value:'All'},
        {label:'Africa',value:'Africa'},
        {label:'Asia',value:'Asia'},
        {label:'America',value:'America'},
        {label:'Europe',value:'Europe'},
        {label:'Ocenia',value:'Ocenia'}
    
    ]
    const [dropdownOpen,setDropDownOpen] = useState<boolean>(false)
    const [dropdownItem,setDropDownItem] = useState<DropDownItemType>({label:'Filter By Region',value:''})
    const toggleDropDown=()=>setDropDownOpen(!dropdownOpen)

    return ( <FirstSectionStyle>
            <div className='search__box'>
                <label htmlFor="search">
                <FaSearch/>
                </label>
                <input id='search' type="text" placeholder="Search for a Country" />
            </div>

           <div className='dropDown__container'>
             <div className='dropDown__menu' onClick={toggleDropDown} >
               {dropdownItem.label}
               <FaAngleDown/>
             </div>
             {dropdownOpen && dropDownlist.map((listItem)=>{
                return <DropDownItem closeDropDown={toggleDropDown} changeSelectedItem={setDropDownItem} options={listItem}/>
             })}
           </div>

            <select name="" id="">
                 <option defaultValue="" selected disabled hidden>Filter By Region</option>
                 <option value="Africa">
                     Africa
                 </option>
                 <option value="Asia">
                     Asia
                 </option>
                 <option value="America">
                     America
                 </option>
                 <option value="Europe">
                     Europe
                 </option>
                 <option value="Ocenia">
                     Ocenia
                 </option>
            </select>

    </FirstSectionStyle> );
}
 
export default FirstSection;