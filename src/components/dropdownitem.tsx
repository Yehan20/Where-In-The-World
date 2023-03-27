import  {DropDownItemType} from './mainsection'

interface DropDownItemTypes{
    options:{
        value:string,
        label:string,
    };
    changeSelectedItem:React.Dispatch<React.SetStateAction<DropDownItemType>>;
    closeDropDown:()=>void;
}
const DropDownItem = ({options,changeSelectedItem,closeDropDown}:DropDownItemTypes) => {
    const handleClick = ()=>{

     changeSelectedItem({label:options.label,value:options.value})
     closeDropDown()
    }
    return ( <div className='dropDown__item' onClick={handleClick} >
        {options.label}
    </div> );
}
 
export default DropDownItem;