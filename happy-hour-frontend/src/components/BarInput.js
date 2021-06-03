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
        place_id: this.props.bar.place_id
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
            name: "",
            details: "",
            lat: 0,
            lng: 0,
            place_id: ""
        })
    }


    render(){
        return (
            <div>
             
                Verify a happy hour:
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="bar name" value={this.state.name} name="name"  />
                    <input type="float" placeholder="lat" value={this.state.lat} name="lat" />
                    <input type="float" placeholder="lng" value={this.state.lng} name="lng" />
                    <input type="text" placeholder="google place id" value={this.state.place_id} name="place_id" />
                    <input type="text" placeholder="details" value={this.state.details} name="details" onChange={this.handleChange} />
                    <br/>
                    <input type="submit"/>
                </form>
                <br></br>
                <BarSearch/>
            </div>
        )
    }
}

export default connect(null, {addBar})(BarInput);