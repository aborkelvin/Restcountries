import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addcountriesdata, addcurrentdisplay } from "../../actions/actions"
import Country from "../../components/countries/countries"
import Filter from "../../components/filter/filter"
import Header from "../../components/header/header"
import Searchbar from "../../components/searchbar/searchbar"

let data
function Homepage(){

    const countriesdata = useSelector(state => state.countriesdata);
    const currentdisplay = useSelector(state => state.currentdisplay)
    const displaymode = useSelector(state => state.displaymode)
    const dispatch = useDispatch();    


    return(
        <div className = {`w-full min-h-screen ${displaymode === "dark"? "bg-[#202C37]": 'bg-[#FAFAFA]' }`} >
            <Header/>            
            <div className="w-full p-12">
                <div className="w-full mb-8 flex flex-col items-start gap-[35px] md:flex-row md:items-center md:justify-between">
                    <Searchbar />
                    <Filter />
                </div>
                
                <div className="flex flex-wrap gap-[30px] justify-center">                    
                    {
                        currentdisplay.map((item,i)=>{
                            return(
                                <Country key={item.id} name = {item.name} population = {item.population} region = {item.region}
                                capital = {item.capital} flag = {item.flags.png} id = {item.id} />
                            )
                    
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Homepage;
