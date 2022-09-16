import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addcountriesdata, addcurrentdisplay } from "../../actions/actions"
/* import { data } from "../../pages/home/home"; */


function Searchbar(props){
    const countriesdata = useSelector(state => state.countriesdata);
    const currentdisplay = useSelector(state => state.currentdisplay)
    const dispatch = useDispatch(); 
    
    const [input, setinput] = useState()

    const handleinput = e =>{
        let searchterm = e.target.value
        searchterm = searchterm.toLowerCase()
        
        const searchedcountries  =  countriesdata.filter(item=>{
            let name = item.name;
            name = name.toLowerCase();
          return name.includes(searchterm)
        })

        
        dispatch(addcurrentdisplay(searchedcountries))
        //console.log(countriesdata)
    }

    return(
        <input type="search" className="h-[50px] w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] rounded-sm pl-5 outline-0 bg-[#2B3945] 
        text-white" placeholder="Search for a country..." onChange = {handleinput} />
    )
}

export default Searchbar;