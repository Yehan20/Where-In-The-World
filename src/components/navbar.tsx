import {BsMoon,BsSun} from 'react-icons/bs'
import NavBarStyled from './style/navbar.style';
import {color} from '../components/colors/colors'
import {NavBarInterface} from '../interfaces/countries.interface'
// interface NavBarInterface{
//      setColors:React.Dispatch<React.SetStateAction<{
//         primary: string;
//         secondary: string;
//         textClr:string
//         isDark: boolean;
//         iconClr:string;
//     }>>;

//     colors: {
//         primary: string;
//         secondary: string;
//         textClr:string;
//         isDark: boolean;
//         iconClr:string;
//     }
// }
const NavBar = ({setColors,colors}:NavBarInterface) => {
    const handleClick=()=>{
        // if this is dark mark light 
        if(colors.isDark) setColors({primary:color.White, secondary:color.LightGray,textClr:color.VeryDarkText,iconClr:color.DarkGray,isDark:!colors.isDark})
        else setColors({primary:color.DarkBlue,secondary:color.VeryDarkBg,textClr:color.White,iconClr:color.White,isDark:!colors.isDark})
    }
    return ( <NavBarStyled>
          <h1>Where in the World</h1>
          <button onClick={handleClick}>
           {colors.isDark?<><BsMoon fill='white'/>Dark Mode</>:<><BsSun/>Light Mode</>}
          </button>
    </NavBarStyled> );
}
 
export default NavBar;