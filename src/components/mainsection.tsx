import React, { useEffect, useRef, useState } from 'react';
import {FaSearch} from 'react-icons/fa'
import {UpperSectionStyle,MainSectionStyle} from './style/mainsection.style';
import { FaAngleDown } from 'react-icons/fa';
import DropDownItem from './dropdownitem';
import Countries from './countries';
import useClickOutside from '../hooks/useclickoutside'

export type DropDownItemType={
    label:string | '';
    value:string | '';
}

const MainSection = () => {
    // Arrays
    const dropDownlist:DropDownItemType[]=[
        {label:'All',value:'All'},
        {label:'Africa',value:'Africa'},
        {label:'Asia',value:'Asia'},
        {label:'America',value:'America'},
        {label:'Europe',value:'Europe'},
        {label:'Ocenia',value:'Ocenia'}
    
    ]

    // States and Methods
    const [dropdownOpen,setDropDownOpen] = useState<boolean>(false)

    const [dropdownItem,setDropDownItem] = useState<DropDownItemType>({label:'Filter By Region',value:''})
    const toggleDropDown=()=>setDropDownOpen(!dropdownOpen)

    // Refs
    const dropDownMenuRef = useRef<HTMLInputElement | null>(null) 
    // console.log(typeof dropDownMenuRef)

    //Custom Hook
    useClickOutside(dropDownMenuRef,()=>{
         setDropDownOpen(false)
    }) 
    
    useEffect(()=>{
        console.log('yehans');
        return()=>console.log('HELLO FROM ')
    })

    return ( 
     <MainSectionStyle>
        <UpperSectionStyle>
            <div className='search__box'>
                <label htmlFor="search">
                <FaSearch/>
                </label>
                <input id='search' type="text" placeholder="Search for a Country" />
            </div>

           <div className='dropDown__container'>

             <div className='dropDown__menu' onClick={toggleDropDown} >
               {!dropdownItem.value || dropdownItem.value==='All' ? 'Filter By Region':dropdownItem.value }
               <FaAngleDown/>
             </div>

             <div className="dropDown__item__head" ref={dropDownMenuRef}>
                {dropdownOpen && dropDownlist.map((listItem,index)=>{
                    return <DropDownItem key={index} closeDropDown={toggleDropDown} changeSelectedItem={setDropDownItem} options={listItem}/>
                })}
             </div>
           </div>
      </UpperSectionStyle>

     <Countries filteredValue={dropdownItem}/>

 </MainSectionStyle> );
}
 
export default MainSection;