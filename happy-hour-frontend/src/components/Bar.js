import React from 'react'



const Bar = (props) => {
    if (props.bar !== null){

        return (
        <div>
            <h2>{props.bar.name}</h2>
            <h3>Last verified: {props.bar.formattedVerified}</h3>

            <p>{props.bar.website}</p>
            <p>{props.bar.phone !== 0 ? props.bar.phone : null}</p>            
            <p>Happy Hour Start: {props.bar.formattedStart ? props.bar.formattedStart : "?"} End: {props.bar.formattedEnd ? props.bar.formattedEnd : "?"} </p>
            {props.bar.dateArray.map((d) => <p>{d}</p>)}
            <p>Deals: {props.bar.details}</p>
        </div>
    )
} else {
    return <div>Select a Bar</div>
}
 
}


export default Bar;  

