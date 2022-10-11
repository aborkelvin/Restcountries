import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

function Backbtn(){
    const displaymode = useSelector(state => state.displaymode)
    
    return(
        
            <Link to = "/">
                <button className = {`rounded-md shadow-sm mb-20 h-[35px] w-[120px]
                ${displaymode === "dark"? "bg-[#2B3945] text-white shadow-[#0c1318]" : "bg-white text-[#111517] shadow-lg"}    `}>
                    Back
                </button>
            </Link>
        
    )
}

export default Backbtn;