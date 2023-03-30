// import  {DropDownItemType} from './mainsection'
import {DropDownItemTypes} from '../interfaces/countries.interface'
// interface DropDownItemTypes{
//     options:{
//         value:string,
//         label:string,
//     };
//     changeSelectedItem:React.Dispatch<React.SetStateAction<DropDownItemType>>;
//     closeDropDown:()=>void;
// }
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