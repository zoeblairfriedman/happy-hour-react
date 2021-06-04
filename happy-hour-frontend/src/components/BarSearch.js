import {connect} from 'react-redux'
import React, { useState } from 'react';
import { fetchGoogleBars } from '../actions/fetchGoogleBars'
import { useDispatch } from "react-redux";
import GoogleBar from './GoogleBar'
import BarInput from './BarInput'


function BarSearch(props) {

    const [selectedBar, setSelectedBar] = useState()

    function handleClick(bar){
        setSelectedBar(bar)
    }
    
    const dispatch = useDispatch()

    const searchBars = () => {
        const lat = props.location.lat
        const lng = props.location.lng
        dispatch(fetchGoogleBars(lat, lng))
    }
       if (!selectedBar) {
        return (
            <div>
           <button onClick={() => {searchBars()}}>Add new Bar through Google Search</button>
          {props.googleBars.map(b => 
          <div onClick={()=> handleClick(b)}>
          <GoogleBar key={b.place_id} bar={b}/>
          </div>
          )}
            </div>
        )} else {
            return(
                <div>
                    <BarInput bar={selectedBar}/>
                </div>
            )
        }
    
    
}

const mapStateToProps = state => {
        return {
            location: state.location,
            googleBars: state.googleBars
        }
    }
//i feel like i'm not supposed to be using connect here, right?
export default connect(mapStateToProps)(BarSearch);
