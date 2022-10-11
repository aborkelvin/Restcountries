import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Backbtn from "../../components/backbtn/backbtn";
import Header from "../../components/header/header";


function Countrydisplay(props){
    
    const params = useParams()    
    
    
    const currentdisplay = useSelector(state => state.currentdisplay)
    const countriesdata = useSelector(state => state.countriesdata)
    const displaymode = useSelector(state => state.displaymode)    

    let currentcountry = countriesdata[params.id - 1]
    console.log(currentcountry)
    let population = currentcountry.population.toLocaleString();
    
    let borderingcountriescode = currentcountry.borders
    if(borderingcountriescode){
        var borderingcountries = countriesdata.filter((item,i) =>{        
            return(
                borderingcountriescode.includes(item.alpha3Code)
            )
        })
        console.log(borderingcountries)
    }
    
    
    return (
        <div className = {`w-full min-h-screen ${displaymode === "dark"? "bg-[#2B3945] text-white" : "bg-[#FAFAFA] text-[#111517]"}    `}  >
            <Header />
            <div className="p-10">
                <Backbtn />                
                <div className = "flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-36 items-center">

                    <img src= {currentcountry.flags.svg} 
                    className = "w-[100%] sm:w-[90%] md:w-[90%] lg:w-[550px]  h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px]   " />

                    <div className = "flex flex-col gap-7 sm:grid sm:gap-5 sm:grid-rows-[20px_repeat(2, minmax(0, 1fr))] sm:auto-rows-max sm:grid-cols-2  w-full sm:w-[90%]">
                        <h1 className = "text-[24px] md:text-[35px] font-extrabold col-span-2">{currentcountry.name}</h1>
                        <div className="row-start-2 flex flex-col gap-2 font-bold text-[16px] md:text-[18px]">                            
                            <h2 className = "" >Native Name: <span className="font-normal">{currentcountry.nativeName}</span></h2>
                            <h2 className = "" >Population: <span className="font-normal">{population}</span></h2>
                            <h2 className = "">Region: <span className="font-normal">{currentcountry.region}</span></h2>
                            <h2 className = "">Sub Region: <span className="font-normal">{currentcountry.subregion}</span></h2>
                            <h2 className = "">Capital: <span className="font-normal">{currentcountry.capital}</span></h2>                            
                        </div>
                        <h2 className = "order-4 col-start-1 col-end-4 font-bold">Border Countries: {
                           borderingcountries ? borderingcountries.map((item,i) => <Bordercountry key = {i} name = {item.name} id = {item.id} />): <Bordercountry name = "No bordering countries"/>
                        } </h2>
                        <div className="col-start-2 row-start-2 flex flex-col gap-2 font-bold text-[16px] md:text-[18px]">
                            <h2 className = "">Top Level Domain : <span className="font-normal"> { currentcountry.topLevelDomain}</span></h2>
                            <h2 className = "">Currencies: {currentcountry.currencies.map((item,i,arr) => {//incase of more than one currency, adds comma to the list also
                                return(
                                    i === arr.length - 1 ? <span key = {i} className="font-normal">{item.name}</span> : <span key={i} className="font-normal">{item.name}, </span>
                                )
                            })
                            }</h2>
                            <h2 className = "">Languages: {currentcountry.languages.map((item,i,arr) => {//incase of more than one language, adds comma to the list also
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

    const displaymode = useSelector(state => state.displaymode)   
    return(
        <Link to = {`${props.id? `/country/${props.id}`: ''}`}>
            <button className = {` rounded-sm shadow-sm  mx-3 my-1 min-h-[35px] px-5 max-w-[130px] font-normal
            ${displaymode === "dark"? "bg-[#2B3945] text-white shadow-[#0c1318]" : "bg-white text-[#111517] shadow-lg"}    `}>
                {props.name}
            </button>
        </Link>
    )
}

export default Countrydisplay