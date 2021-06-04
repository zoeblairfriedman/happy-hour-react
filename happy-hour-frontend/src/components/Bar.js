import React from 'react'
import moment from 'moment'


const Bar = (props) => {
    if (props.bar !== null){
        let newDate = (new Date(props.bar.verified)).toString()
        newDate = newDate.split(" ", 4).join(" ")
        let newStart = props.bar.start.split("T")[1].split(".")[0]
        let newStartConverted = moment(newStart, 'HH:mm:ss').format('h:mm A')
        let newEnd = props.bar.end.split("T")[1].split(".")[0]
        let newEndConverted = moment(newEnd, 'HH:mm:ss').format('h:mm A')

        return (
        <div>
            <h2>{props.bar.name}</h2>
            <h3>Last verified: {newDate}</h3>
            <p>{props.bar.website}</p>
            <p>START: {newStartConverted} END: {newEndConverted}</p>
            <p>{props.bar.details}</p>
        </div>
    )
} else {
    return <div>Select a Bar</div>
}
 }

export default Bar;  

// Fri, 04 Jun 2021 17:51:36 +0000
// class = DateTime