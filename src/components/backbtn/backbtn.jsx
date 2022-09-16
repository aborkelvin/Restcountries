import { Link, useNavigate } from "react-router-dom";

function Backbtn(){
    
    const history  = useNavigate();

    return(
        
            <button className = "bg-[#2B3945] rounded-md shadow-sm shadow-[#0c1318] my-10 h-[35px] text-white w-[120px]" 
                onClick = { ()=>{ history(-1) }}    >
                Back
            </button>
        
    )
}

export default Backbtn;