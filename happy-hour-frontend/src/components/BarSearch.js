import React from 'react'
import {connect} from 'react-redux'
import {fetchGoogleBars} from '../actions/fetchGoogleBars'

class BarSearch extends React.Component {

    // state = {
    //     googleBars: []
    // }

    searchBars = () => {
    fetchGoogleBars(this.props.location)
    }


    render(){
        return (
            <div>
           <button onClick={() => {this.searchBars()}}>Check Google</button>
            </div>
        )
    }

    
    
}

const mapStateToProps = state => {
        return {
            location: state.location,
        }
    }

export default connect(mapStateToProps, {fetchGoogleBars})(BarSearch);