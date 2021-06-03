import React from 'react'
import {connect} from 'react-redux'
import { addBar } from '../actions/addBar'
import BarSearch from './BarSearch'


class BarInput extends React.Component {

    state = {
        name: this.props.bar.name,
        details: "",
        lat: this.props.bar.geometry.location.lat,
        lng: this.props.bar.geometry.location.lng,
        place_id: this.props.bar.place_id,
        address: this.props.bar.vicinity,
        website: ""
    }

    handleChange = (event) => {
       this.setState({
           ...this.state,
           [event.target.name]: event.target.value
        })
    }
 
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBar(this.state)
        ///this is not working?
        this.setState({
            details: "",
            phone: 0
        })
    }

// need to connect all new form elements and make sure they post to the backend
    render(){
        return (
            <div>
                Verify a happy hour:
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="bar name" value={this.state.name} name="name"  />
                    <input type="hidden" placeholder="lat" value={this.state.lat} name="lat" />
                    <input type="hidden" placeholder="lng" value={this.state.lng} name="lng" />
                    <input type="hidden" placeholder="google place id" value={this.state.place_id} name="place_id" />
                    <input type="hidden" placeholder="address" value={this.state.address} name="address" />
                    <br></br>
                    <input type="text" placeholder="website" value={this.state.website} name="website" onChange={this.handleChange} />
                    <br></br>
                    <input type="integer" placeholder="phone" value={this.state.details} name="phone" onChange={this.handleChange} />
                    <br></br>
                    <label>Start Time:</label><input type="time" />
                    <br></br>
                    <label>End Time:</label><input type="time" />
                    <br></br>
                    <label>Monday:</label><input type="checkbox" />
                    <label>Tuesday:</label><input type="checkbox" />
                    <label>Wednesday:</label><input type="checkbox" />
                    <label>Thursday:</label><input type="checkbox" />
                    <label>Friday:</label><input type="checkbox" />
                    <label>Saturday:</label><input type="checkbox" />
                    <label>Sunday:</label><input type="checkbox" />
                    <br></br>
                    <input type="text" placeholder="details" value={this.state.details} name="details" onChange={this.handleChange} />
                    <br/>
                    <input type="submit"/>
                </form>
                <br></br>
            </div>
        )
    }
}

export default connect(null, {addBar})(BarInput);