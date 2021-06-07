import {connect} from 'react-redux'
import React, { useState } from 'react';
import { fetchGoogleBars } from '../actions/fetchGoogleBars'
import { useDispatch } from "react-redux";
import GoogleBar from './GoogleBar'
import BarInput from './BarInput'
import BarEdit from './BarEdit'


function BarSearch(props) {

    const [selected, setSelected] = useState()

    function handleClick(bar){
        setSelected(bar)
    }

    function returnBar(bar){
        return props.bars.find(b => b.placeId === bar.place_id)
    }
    
    const dispatch = useDispatch()

    const searchBars = () => {
        const lat = props.location.lat
        const lng = props.location.lng
        dispatch(fetchGoogleBars(lat, lng))
    }
       if (!selected) {
        return (
            <div className="barList" >
            <p>You must enter in location prior to search</p>
            <button onClick={() => {searchBars()}}>Search Area</button>
          
            {props.googleBars.map(b => 
            <div key={b.place_id} onClick={()=> handleClick(b)}>
            <GoogleBar key={b.place_id} bar={b}/>
            </div>
            )}
            
            </div>
        )} else {
            return(
                <div>
                    {!!returnBar(selected) ? <BarEdit bar={returnBar(selected)}/> : <BarInput bar={selected}/>}    
                </div>
            )
        }
    
    
}

const mapStateToProps = state => {
        return {
            location: state.location,
            googleBars: state.googleBars,
            bars: state.bars
        }
    }
//i feel like i'm not supposed to be using connect here, right? this should be use selector
export default connect(mapStateToProps)(BarSearch);
