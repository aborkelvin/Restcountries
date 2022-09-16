import { useSelector, useDispatch } from "react-redux";
import { addcountriesdata, addcurrentdisplay } from "../../actions/actions"


function Filter(){
    const currentdisplay = useSelector(state => state.currentdisplay)
    const countriesdata = useSelector(state => state.countriesdata)
    const dispatch = useDispatch()

    const handlefilter = (e) =>{
        let select  = e.target;
        let value =  select.options[select.selectedIndex].value;
        console.log(value)

        value = value.toLowerCase();

        if(value == "default" || value == "all regions"){
            dispatch(addcurrentdisplay(countriesdata))
        }else{        
            let selectedcountries = countriesdata.filter( (item,i) =>{
                let region = item.region;
                region = region.toLowerCase()

                return region == value;
            })

            //console.log(selectedcountries)
            dispatch(addcurrentdisplay(selectedcountries))
        }    
    }
    
    return(        
            <select name="filter" defaultValue = {'DEFAULT'} className="outline-0 h-[50px] w-[250px] xl:w-[300px] bg-[#2B3945]
            text-white p-2 rounded cursor-pointer" onClick={handlefilter} >
                <option value = "DEFAULT" disabled hidden className="cursor-pointer">Filter by Region</option>
                <option value="Africa" className ="mt-2">Africa</option>
                <option value = "Americas" className="cursor-pointer">America</option>
                <option value="Asia" className="cursor-pointer">Asia</option>
                <option value = "Europe" className="cursor-pointer">Europe</option>
                <option value="Oceania" className="cursor-pointer">Oceania</option>
                <option value="All regions" className="cursor-pointer">All regions</option>
            </select>
    )
}

export default Filter;