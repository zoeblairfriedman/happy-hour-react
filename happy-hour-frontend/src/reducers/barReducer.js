

export default function barReducer(state = {bars: [], googleBars: [], selectedBar: "", location: {}}, action){
    switch(action.type){
        case "FETCH_BARS":
            return {...state, bars: action.payload}
        case "ADD_BAR":
            return {...state, bars: [...state.bars, action.payload]}
        case "GOOGLE_BARS":
            return {...state, googleBars: action.payload}
        case "SELECT_BAR":
            return {...state, selectedBar: action.payload}
        case "EDIT_BAR":
            // do something here!!! 
        case "SET_LOCATION":
            return {
                ...state,
                location: action.payload
            }
        default:
            return state
    }
   
}