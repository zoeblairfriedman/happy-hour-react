export const addBar = (formData) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/bars`, {
            method: "POST",
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(bar => dispatch({
            type: "ADD_BAR",
            payload: bar
        }))
    }
}