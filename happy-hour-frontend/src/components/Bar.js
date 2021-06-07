import React from 'react'
import BarEdit from './BarEdit'



const Bar = (props) => {
    let bar = props.bar
    if (props.bar !== ""){
        return (
        <div>
            <h2>{bar.name}</h2>
            <h3>Last verified: {bar.formattedVerified}</h3>

            <p>{bar.website}</p>
            <p>{bar.phone !== 0 ? bar.phone : null}</p>            
            <p>Start: {bar.formattedStart ? bar.formattedStart : "?"} End: {props.bar.formattedEnd ? props.bar.formattedEnd : "?"} </p>
            <p>{bar.dateArray}</p>
            <p>Deals: {bar.details}</p>
        </div>
    )
} else {
    return <div>Select a Bar</div>
}
 
}


export default Bar;  

