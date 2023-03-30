import React, { useEffect, useRef, useState } from 'react';
import {FaSearch} from 'react-icons/fa'
import {UpperSectionStyle,MainSectionStyle} from '../../assets/style/mainsection.style';
import { FaAngleDown } from 'react-icons/fa';
import DropDownItem from '../dropdown/dropdownitem';
import Countries from '../countries/allcountries';
import useClickOutside from '../../hooks/useclickoutside'
import {DropDownItemType} from '../../interfaces/countries.interface'



const Home = () => {
    // Arrays
    const dropDownlist:DropDownItemType[]=[
        {label:'All',value:'All'},
        {label:'region',value:'Africa'},
        {label:'region',value:'Asia'},
        {label:'region',value:'America'},
        {label:'region',value:'Europe'},
        {label:'region',value:'Oceania'}
    
    ]

    // States and Methods
    const [dropdownOpen,setDropDownOpen] = useState<boolean>(false)
    const [searchValue,setSerachValue] = useState<string>('')
    const [dropdownItem,setDropDownItem] = useState<DropDownItemType>({label:'Filter By Region',value:''})
    const toggleDropDown=()=>setDropDownOpen(!dropdownOpen)

    // Refs
    const dropDownMenuRef = useRef<HTMLDivElement | null>(null) 
    


    //Custom Hook
    useClickOutside(dropDownMenuRef,()=>{
   
         setDropDownOpen(false)
    }) 
    


    return ( 
     <MainSectionStyle>
        <UpperSectionStyle>
            <div className='search__box'>
                <label htmlFor="search">
                <FaSearch/>
                </label>
                <input onChange={(e)=>setSerachValue(e.target.value)} id='search' type="text" placeholder="Search for a Country" />
            </div>

           <div className='dropDown__container'  ref={dropDownMenuRef}>

             <div className='dropDown__menu' onClick={toggleDropDown} >
               {!dropdownItem.value || dropdownItem.value==='All' ? 'Filter By Region':dropdownItem.value }
               <FaAngleDown/>
             </div>

              {dropdownOpen && <div className="dropDown__item__head" >
                {dropdownOpen && dropDownlist.map((listItem,index)=>{
                    return <DropDownItem key={index} closeDropDown={toggleDropDown} changeSelectedItem={setDropDownItem} options={listItem}/>
                })}
             </div>} 
           </div>
      </UpperSectionStyle>
     <Countries searchValue={searchValue} filteredValue={dropdownItem}/>
 </MainSectionStyle> );
}
 
export default Home;