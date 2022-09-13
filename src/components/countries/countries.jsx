
function Country(props){

    return(
        <div className=" w-[280px] shadow-2xl shadow-[#0c1318] lg:mx-auto  my-5 cursor-pointer">
            <img src = {props.flag} className="w-full h-[150px] rounded-t-md" />
            <div className="w-full h-[170px] rounded-b-md bg-[#2B3945] text-white p-5 text-base">
                <h1 className = "font-extrabold text-xl mb-2">{props.name}</h1>
                <h2 className="" >Population:<span className="font-light text-base"> {props.population}</span></h2>
                <h2 className="" >Region:<span className="font-light text-base"> {props.region}</span></h2>
                <h2 className="" >Capital:<span className="font-light text-base"> {props.capital}</span></h2>
            </div>
        </div>
    )
}

export default Country