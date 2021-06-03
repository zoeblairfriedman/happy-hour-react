import {connect} from 'react-redux'
import React, { useState } from 'react';



function BarSearch(props) {

    const [googleBars, setGoogleBars] = useState([]);

    const searchBars = () => {
        const lat = props.location.lat
        const lng = props.location.lng
        fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&types=bar&keyword=happyhour&key=AIzaSyBEBEXXRvP5A3JAuZ2hL2Z2ShMPxzWeMxQ`)
        .then(r => r.json())
        .then(bars => setGoogleBars(bars.results.map(b => b)))
    }


        return (
            <div>
           <button onClick={() => {searchBars()}}>Check Google</button>
            </div>
        )
    
    
}

const mapStateToProps = state => {
        return {
            location: state.location,
        }
    }

export default connect(mapStateToProps)(BarSearch);