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

const displaymode = (state = 'dark', action) =>{
    switch(action.type){
        case 'change to light mode':
            return 'light'
        case 'change to dark mode':
            return 'dark'
        default:
            return state
    }
}

const allreducers = combineReducers({
    countriesdata:countriesdata,
    currentdisplay:currentdisplay,
    displaymode:displaymode
})
export default allreducers