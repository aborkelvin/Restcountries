import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Country(props){
    const displaymode = useSelector(state => state.displaymode)

    return(
        <div className= {` w-[250px] sm:w-[280px] shadow-2xl lg:mx-auto my-5 rounded-b-md 
        ${displaymode === "dark"? "shadow-[rgb(12,19,24)]": '' } `}>
            <Link to = {`/country/${props.id}`} >
                <img src = {props.flag} className="w-full h-[150px] rounded-t-md" />
                <div className= {`w-full h-[190px] rounded-b-md  p-5 text-base
                ${displaymode === "dark"? "bg-[#2B3945] text-white" : "bg-white text-[#111517]"}    `}>
                    <h1 className = "font-extrabold text-xl mb-2">{props.name}</h1>
                    <h2 className="" >Population:<span className="font-light text-base"> {props.population}</span></h2>
                    <h2 className="" >Region:<span className="font-light text-base"> {props.region}</span></h2>
                    <h2 className="" >Capital:<span className="font-light text-base"> {props.capital}</span></h2>
                </div>
            </Link>
        </div>
    )
}

export default Country