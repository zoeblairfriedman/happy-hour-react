const setLocation = (locationObj) => {
    return {
        type: "SET_LOCATION",
        payload: locationObj
    }
}

//go back to thunk for this

export default setLocation