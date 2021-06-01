

export default function barReducer(state = {bars: []}, action){
    switch(action.type){
        case "FETCH_BARS":
            // i want to return a new version of state where the bars points to the payload
            return {bars: action.payload}
        default:
            return state
    }
   
}