import { useDispatch, useSelector } from "react-redux"
import { changetodarkmode, changetolightmode } from "../../actions/actions";

import darkmode from "../../images/darkmode.svg"
import lightmode from "../../images/lightmode.svg"

function Header(){
    const displaymode = useSelector(state => state.displaymode)    
    const dispatch = useDispatch();    

    const changedisplaymode = () =>{
        if(displaymode == "dark"){
            dispatch(changetolightmode())
        }else{
            dispatch(changetodarkmode())
        }
    }

    return(
        <div className={`h-[80px] shadow-lg flex items-center justify-between w-full py-10 px-14 ${displaymode === "dark"? "bg-[#2B3945] text-white" : 'bg-white text-[#111517]'} `}>
            <h1 className = "text-xl font-bold">Where in the world?</h1> 
            <div className = "font-bold flex gap-[10px] cursor-pointer" onClick = {() => changedisplaymode()} >
                <img src = {displaymode === "dark"? darkmode : lightmode } alt = {displaymode === "dark"? "Dark mode image" : "Light mode image" } />
                <p className = "text-xl" >{displaymode === "dark"? 'Dark Mode' : 'Light Mode'  }</p>
            </div>           
        </div>
    )
}

export default Header