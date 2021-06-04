import React from 'react'
import {connect} from 'react-redux'
import { addBar } from '../actions/addBar'


class BarInput extends React.Component {

    state = {
        name: this.props.bar.name,
        details: "",
        lat: this.props.bar.geometry.location.lat,
        lng: this.props.bar.geometry.location.lng,
        place_id: this.props.bar.place_id,
        address: this.props.bar.vicinity,
        website: "",
        phone: 0,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        start: "",
        end: undefined,
        verified: ""
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
           ...this.state,
           [event.target.name]: value
        })
    }
 
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBar(this.state)
        this.setState({
            name: "",
            details: "",
            phone: 0,
            website: "",
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
            start: undefined,
            end: undefined
        })
    }


    verifyBar = (e) => {
        e.target.className = "verified"
        e.target.innerText = "VERIFIED!"
        this.setState({
         ...this.state,
         verified: new Date
     })
    }

// make sure this verification logic works
    render(){
        let button;
        if (this.state.verified !== ""){
            button = <button id="verify-button" className="verified" onClick={(e) => this.verifyBar(e)}>RE-VERIFY</button>
        } else { 
            button = <button id="verify-button" className="unverified" onClick={(e) => this.verifyBar(e)}>UNVERIFIED</button>
        }
                
        return (
            <div>
                Verify a happy hour:
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.state.name}</h2>
                    <input type="text" placeholder="website" value={this.state.website} name="website" onChange={this.handleChange} />
                    <br></br>
                    <input type="integer" placeholder="phone" value={this.state.phone} name="phone" onChange={this.handleChange} />
                    <br></br>
                    <label>Start Time:</label><input type="time" value={this.state.start} name="start" onChange={this.handleChange}/>
                    <br></br>
                    <label>End Time:</label><input type="time" value={this.state.end} name="end" onChange={this.handleChange}/>
                    <br></br>
                    <label>Monday:</label><input type="checkbox" name="monday" checked={this.state.monday} onChange={this.handleChange} />
                    <label>Tuesday:</label><input type="checkbox" name="tuesday" checked={this.state.tuesday} onChange={this.handleChange}/>
                    <label>Wednesday:</label><input type="checkbox" name="wednesday" checked={this.state.wednesday} onChange={this.handleChange}/>
                    <label>Thursday:</label><input type="checkbox" name="thursday" checked={this.state.thursday} onChange={this.handleChange}/>
                    <label>Friday:</label><input type="checkbox" name="friday" checked={this.state.friday} onChange={this.handleChange}/>
                    <label>Saturday:</label><input type="checkbox" name="saturday" checked={this.state.saturday} onChange={this.handleChange}/>
                    <label>Sunday:</label><input type="checkbox" name="sunday" checked={this.state.sunday} onChange={this.handleChange}/>
                    <br></br>
                    <input type="text" placeholder="details" value={this.state.details} name="details" onChange={this.handleChange} />
                    <br/>
                    <input type="submit"/>
                </form>
                {button}
                <br></br>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        bars: state.bars,
    }
}


export default connect(mapStateToProps, {addBar})(BarInput);