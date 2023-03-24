import {BsMoon} from 'react-icons/bs'
interface NavBarInterface{
     setColors:React.Dispatch<React.SetStateAction<{
        primary: string;
        secondary: string;
        isDark: boolean;
    }>>;

    colors: {
        primary: string;
        secondary: string;
        isDark: boolean;
    }
}
const NavBar = ({setColors,colors}:NavBarInterface) => {
    const handleClick=()=>{
        if(colors.isDark) setColors({ primary: 'red', secondary: 'green',isDark:!colors.isDark})
        else  setColors({primary: 'black', secondary: 'blue',isDark:!colors.isDark})
    }
    return ( <nav>
          <h1>Where in the World</h1>
          <button onClick={handleClick}>
           {colors.isDark?<><BsMoon/>"</>:<h2>Dark Mode</h2>}
          </button>
    </nav> );
}
 
export default NavBar;