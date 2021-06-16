import React from 'react'

const Bar = (props) => {
    let bar = props.bar
    if (props.bar !== ""){
        return (
        <div className="barShow">
            <h3>{bar.name}</h3>
            <h4>Last verified: {bar.formattedVerified}</h4>
            <p>{bar.address}</p>
            <p>{bar.website}</p>
            <p>{bar.phone !== 0 ? bar.phone : null}</p>            
            <p>Start: {bar.formattedStart ? bar.formattedStart : "?"} End: {props.bar.formattedEnd ? props.bar.formattedEnd : "?"} </p>
            <p>{bar.dateArray}</p>
            <p>Deals: {bar.details}</p>
        </div>
    )
} else {
    return <div></div>
}
 
}


export default Bar;  

