import {FaSearch} from 'react-icons/fa'
const FirstSection = () => {
    return ( <section>
         <div className="row">
            <div className='search__box'>
                <FaSearch/>
                <input type="text" placeholder="Search for a Country" />
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
         </div>
    </section> );
}
 
export default FirstSection;