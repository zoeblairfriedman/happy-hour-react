

export default function barReducer(state = {bars: [], location: {}}, action){
    switch(action.type){
        case "FETCH_BARS":
            return {...state, bars: action.payload}
        case "SET_LOCATION":
            return {
                ...state,
                location: action.payload
            }
        default:
            return state
    }
   
}