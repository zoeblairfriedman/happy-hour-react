import React from 'react'
import {connect} from 'react-redux'
import { addBar } from '../actions/addBar'
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

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBar(this.state)
    }


    render(){
        return (
            <div>
                <BarSearch/>
                Verify a happy hour:
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="bar name" value={this.state.name} name="name" onChange={this.handleChange} />
                    <input type="text" placeholder="details" value={this.state.details} name="details" onChange={this.handleChange} />
                    <input type="float" placeholder="lat" value={this.state.lat} name="lat" onChange={this.handleChange} />
                    <input type="float" placeholder="lng" value={this.state.lng} name="lng" onChange={this.handleChange} />
                    <input type="text" placeholder="google place id" value={this.state.place_id} name="place_id" onChange={this.handleChange} />
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addBar})(BarInput);