import React from 'react'
import Bars from './Bars'
import {useSelector} from 'react-redux'
import {useState} from 'react'


const HappyNow = () => {

const bars = useSelector(state => state.bars)
const [sortedBars, setBars] = useState(bars)

function handleClick(){
    setBars(bars.sort((a,b) => (a.name > b.name) ? 1 : -1))
}

            return (
                <div>
                    <p>Coming Soon! For now, please enjoy this button:</p>
                    <button onClick={() => handleClick()}> Sort!</button>
                    <Bars bars={bars}/>
                </div>
            )

 }

export default HappyNow;  

