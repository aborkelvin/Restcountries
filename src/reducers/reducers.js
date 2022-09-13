import { combineReducers } from "redux"

const countriesdata = (state = [] ,action) => {
    switch(action.type){
        case 'STORE COUNTRIES DATA':
            return action.payload
        default: 
            return state 
    }
}

const currentdisplay = (state = [] ,action) => {
    switch(action.type){
        case 'ADD DISPLAY DATA':
            return action.payload
        default: 
            return state 
    }
} 

const allreducers = combineReducers({
    countriesdata:countriesdata,
    currentdisplay:currentdisplay
})
export default allreducers