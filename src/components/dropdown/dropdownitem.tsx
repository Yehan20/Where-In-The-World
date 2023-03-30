
import {DropDownItemTypes} from '../../interfaces/countries.interface'

const DropDownItem = ({options,changeSelectedItem,closeDropDown}:DropDownItemTypes) => {
  
    const handleClick = ()=>{
        
     console.log('clicked');
     changeSelectedItem({label:options.label,value:options.value})
     closeDropDown()
    }
    return ( <div className='dropDown__item' onClick={handleClick} >
        {options.value}
    </div> );
}
 
export default DropDownItem;