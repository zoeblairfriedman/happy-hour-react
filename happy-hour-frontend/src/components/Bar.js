import React from 'react'



const Bar = (props) => {
    
    if (props.bar !== null){
    return (
        <div>
            <h2>{props.bar.name}</h2>
        </div>
    )
} else {
    return <div>Select a Bar</div>
}
 }

export default Bar;  