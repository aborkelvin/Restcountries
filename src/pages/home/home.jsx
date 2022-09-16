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
    const dispatch = useDispatch();    

/*     useEffect(()=>{
      async function getdata(){
          const fetchresult = await fetch('https://restcountries.com/v2/all?fields=name,capital,currencies,nativeName,topLevelDomain,population,languages,region,subrges,region,subregion,population,alpha3Code,borders,flags')
          data = await fetchresult.json();
          
          dispatch(addcountriesdata(data))
          dispatch(addcurrentdisplay(data))
          console.log('got data again')
      }
  
      getdata()
    },[])
 */
    return(
        <div className = "bg-[#202C37] w-full min-h-screen">
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
                                <Country key={i} name = {item.name} population = {item.population} region = {item.region}
                                capital = {item.capital} flag = {item.flags.png} id = {i} />
                            )
                    
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}

let data2 = [
    {
    "name": "Zimbabwe",
    "topLevelDomain": [
      ".zw"
    ],
    "alpha3Code": "ZWE",
    "capital": "Harare",
    "subregion": "Southern Africa",
    "region": "Africa",
    "population": 14862927,
    "borders": [
      "BWA",
      "MOZ",
      "ZAF",
      "ZMB"
    ],
    "nativeName": "Zimbabwe",
    "flags": {
      "svg": "https://flagcdn.com/zw.svg",
      "png": "https://flagcdn.com/w320/zw.png"
    },
    "currencies": [
      {
        "code": "ZMW",
        "name": "Zambian kwacha",
        "symbol": "K"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "sn",
        "iso639_2": "sna",
        "name": "Shona",
        "nativeName": "chiShona"
      },
      {
        "iso639_1": "nd",
        "iso639_2": "nde",
        "name": "Northern Ndebele",
        "nativeName": "isiNdebele"
      }
    ]
  },
  {
    "name": "Sweden",
    "topLevelDomain": [
      ".se"
    ],
    "alpha3Code": "SWE",
    "capital": "Stockholm",
    "subregion": "Northern Europe",
    "region": "Europe",
    "population": 10353442,
    "borders": [
      "FIN",
      "NOR"
    ],
    "nativeName": "Sverige",
    "flags": {
      "svg": "https://flagcdn.com/se.svg",
      "png": "https://flagcdn.com/w320/se.png"
    },
    "currencies": [
      {
        "code": "SEK",
        "name": "Swedish krona",
        "symbol": "kr"
      }
    ],
    "languages": [
      {
        "iso639_1": "sv",
        "iso639_2": "swe",
        "name": "Swedish",
        "nativeName": "svenska"
      }
    ],
    "independent": false
  }
]

export default Homepage;
export {data2}