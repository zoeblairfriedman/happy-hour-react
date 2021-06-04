import React from 'react'



const Bar = (props) => {
    if (props.bar !== null){
        let newDate = (new Date(props.bar.verified)).toString()
        newDate = newDate.split(" ", 4).join(" ")
    return (
        <div>
            <h2>{props.bar.name}</h2>
            <h3>Last verified: {newDate}</h3>
        </div>
    )
} else {
    return <div>Select a Bar</div>
}
 }

export default Bar;  