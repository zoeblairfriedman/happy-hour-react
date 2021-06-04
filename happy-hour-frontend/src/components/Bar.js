import React from 'react'
import moment from 'moment'



const Bar = (props) => {
    if (props.bar !== null){

        return (
        <div>
            <h2>{props.bar.name}</h2>
   
            <p>{props.bar.website}</p>

            <p>{props.bar.details}</p>
        </div>
    )
} else {
    return <div>Select a Bar</div>
}
 
}


export default Bar;  

