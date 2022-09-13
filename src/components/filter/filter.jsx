import { useSelector, useDispatch } from "react-redux";
import { addcountriesdata, addcurrentdisplay } from "../../actions/actions"


function Filter(){
    
    return(        
            <select name="filter" defaultValue = {'DEFAULT'} className="outline-0 h-[50px] w-[250px] xl:w-[300px] bg-[#2B3945]
            text-white p-2 rounded cursor-pointer">
                <option value = "DEFAULT" disabled hidden className="cursor-pointer">Filter by Region</option>
                <option value="Africa" className ="mt-2">Africa</option>
                <option value = "America" className="cursor-pointer">America</option>
                <option value="Asia" className="cursor-pointer">Asia</option>
                <option value = "Europe" className="cursor-pointer">Europe</option>
                <option value="Oceania" className="cursor-pointer">Oceania</option>
            </select>
    )
}

export default Filter;