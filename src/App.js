import Homepage, { data2 } from "./pages/home/home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Countrydisplay from "./pages/countrydisplay/countrydisplay";
import {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import { addcountriesdata, addcurrentdisplay } from "./actions/actions";


function App() {
  let dispatch = useDispatch();
    
  
  useEffect(()=>{
    async function getdata(){
        const fetchresult = await fetch('https://restcountries.com/v2/all?fields=name,capital,currencies,nativeName,topLevelDomain,population,languages,region,subrges,region,subregion,population,alpha3Code,borders,flags')
        let data = await fetchresult.json();
        
        dispatch(addcountriesdata(data))
        dispatch(addcurrentdisplay(data))
        console.log('got data again')
    }

    getdata()
  },[])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Homepage/>} /> 
          <Route path = '/country/:id' element = { <Countrydisplay /> } /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
