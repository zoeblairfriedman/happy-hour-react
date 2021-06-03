

export default function barReducer(state = {bars: [], googleBars: [], location: {}}, action){
    switch(action.type){
        case "FETCH_BARS":
            return {...state, bars: action.payload}
        case "ADD_BAR":
            return {...state, bars: [...state.bars, action.payload]}
        case "GOOGLE_BARS":
            return {...state, googleBars: action.payload}
        case "SET_LOCATION":
            return {
                ...state,
                location: action.payload
            }
        default:
            return state
    }
   
}