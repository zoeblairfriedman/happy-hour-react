import React from 'react'
import {connect} from 'react-redux'
import BarSearch from './BarSearch'


class BarInput extends React.Component {

    state = {
        name: "",
        details: "",
        lat: 0,
        lng: 0,
        place_id: ""
    }

    handleChange = (event) => {
       this.setState({
           ...this.state,
           [event.target.name]: event.target.value
        })
    }


    render(){
        return (
            <div>
                <BarSearch/>
                Verify a happy hour:
                <form onChange={this.handleChange}>
                    <input type="text" placeholder="bar name" value={this.state.name} name="name"/>
                    <input type="text" placeholder="details" value={this.state.details} name="details"/>
                    <input type="float" placeholder="lat" value={this.state.lat} name="lat"/>
                    <input type="float" placeholder="lng" value={this.state.lng} name="lng"/>
                    <input type="text" placeholder="google place id" value={this.state.place_id} name="place_id"/>
                </form>
            </div>
        )
    }
}

export default connect()(BarInput);