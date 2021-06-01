import React from 'react'



const Bars = (props) => {
console.log(props.bars)
    return (
        <div>
            Bars:
    {props.bars.map(b =><li key={b.id}>{b.name}</li>)}
        </div>
    )
}

export default Bars; 