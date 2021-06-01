import React from 'react'


const Bars = (props) => {
console.log(props.bars)
    return (
        <div>
            Bars:
    {props.bars.map(b =><li>{b.name}</li>)}
            Map:
        </div>
    )
}

export default Bars; 