import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Backbtn from "../../components/backbtn/backbtn";
import Header from "../../components/header/header";


function Countrydisplay(props){

    const params = useParams()    
    
    
    const currentdisplay = useSelector(state => state.currentdisplay)
    const countriesdata = useSelector(state => state.countriesdata)

    let currentcountry = currentdisplay[params.id]
    console.log(currentcountry)
    let population = currentcountry.population.toLocaleString();
    
    let borderingcountriescode = currentcountry.borders
    
    let borderingcountries = countriesdata.filter((item,i) =>{        
        return(
            borderingcountriescode.includes(item.alpha3Code)
        )
    })
    console.log(borderingcountries)

    useEffect(() =>{

    },[])

    return (
        <div className = "bg-[#202C37] w-full min-h-screen"  >
            <Header />
            <div className="p-10">
                <Backbtn />                
                <div className = "flex gap-36">

                    <img src= {currentcountry.flags.svg} 
                    className = "w-[300px] sm:w-[500px] md:w-[500px] lg:w-[550px]  h-[200px] sm:h-[300px] md:h-[350px] lg:h-[420px]   " />

                    <div className = "grid gap-5 grid-rows-[20px_repeat(2, minmax(0, 1fr))] auto-rows-max grid-cols-2 text-white">
                    <h1 className = "text-[35px] font-extrabold col-span-2">{currentcountry.name}</h1>
                        <div className="row-start-2 flex flex-col gap-2">                            
                            <h2 className = "font-bold text-[18px]" >Native Name: <span className="font-normal">{currentcountry.nativeName}</span></h2>
                            <h2 className = "font-bold text-[18px]" >Population: <span className="font-normal">{population}</span></h2>
                            <h2 className = "font-bold text-[18px]">Region: <span className="font-normal">{currentcountry.region}</span></h2>
                            <h2 className = "font-bold text-[18px]">Sub Region: <span className="font-normal">{currentcountry.subregion}</span></h2>
                            <h2 className = "font-bold text-[18px]">Capital: <span className="font-normal">{currentcountry.capital}</span></h2>                            
                        </div>
                        <h2 className = "col-start-1 col-end-4 font-bold">Border Countries: {
                            borderingcountries.map(item => <Bordercountry name = {item.name} />)
                        } </h2>
                        <div className="col-start-2 row-start-2 flex flex-col gap-2">
                            <h2 className = "font-bold text-[18px]">Top Level Domain : <span className="font-normal"> { currentcountry.topLevelDomain}</span></h2>
                            <h2 className = "font-bold text-[18px]">Currencies: {currentcountry.currencies.map((item,i,arr) => {//incase of more than one currency, adds comma to the list also
                                return(
                                    i === arr.length - 1 ? <span key = {i} className="font-normal">{item.name}</span> : <span key={i} className="font-normal">{item.name}, </span>
                                )
                            })
                            }</h2>
                            <h2 className = "font-bold text-[18px]">Languages: {currentcountry.languages.map((item,i,arr) => {//incase of more than one language, adds comma to the list also
                                return(
                                    i === arr.length - 1 ? <span key = {i} className="font-normal">{item.name}</span> : <span key={i} className="font-normal">{item.name}, </span>
                                )
                            })
                            }</h2>
                            
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}



function Bordercountry(props){

    return(
        <button className = "bg-[#2B3945] rounded-sm shadow-sm shadow-[#0c1318] mx-3 my-1 min-h-[35px] text-white w-[120px] font-normal" >            
            {props.name}
        </button>
    )
}

export default Countrydisplay