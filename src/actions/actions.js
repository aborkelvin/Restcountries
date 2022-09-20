export const addcountriesdata = (data) => {

    return{
        type:'STORE COUNTRIES DATA',
        payload:data
    }
}

export const addcurrentdisplay = (data) => {

    return{
        type:'ADD DISPLAY DATA',
        payload:data
    }
}

export const changetodarkmode = () => {
    return {
        type: 'change to dark mode'
    }
}

export const changetolightmode = () => {
    return {
        type: 'change to light mode'
    }
}