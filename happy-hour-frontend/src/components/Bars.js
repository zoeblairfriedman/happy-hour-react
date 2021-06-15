import React from 'react'



const Bars = (props) => {
    return (
        <div>
            Bars:
    {props.bars.map(b =><li key={b.id}>{b.name}</li>)}
        </div>
    )
}

export default Bars; 