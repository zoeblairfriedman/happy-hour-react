import React from 'react'
import Bars from './Bars'
import {useSelector} from 'react-redux'



const HappyNow = () => {

const bars = useSelector(state => state.bars)



            return (
                <div>
                    <p>Coming Soon! For now, please enjoy this list of all saved bars:</p>
                    <Bars bars={bars}/>
                </div>
            )

 }

export default HappyNow;  

