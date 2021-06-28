import React from 'react'
import {connect} from 'react-redux'


class Bars extends React.Component {

constructor() {
    super()
    this.state = ({

    })
    }

handleClick = (b) => {
if (this.state[b.name]){
    this.setState({
        // use prevState no spread
        ...this.state,
        [b.name]: this.state.value += this.state.value
    })
} else {
    this.setState({
        ...this.state,
        [b.name]: this.state.value
    })
}
}

handleChange = (event) => {
    const increment = event.target.value
    this.setState({
        ...this.state,
        value: increment
    })
}

    render (){
        return (
            <div>
            <input type="integer" onChange={this.handleChange}></input> 
            <br></br>
            Bars:
    {this.props.bars.map(b =><li key={b.id}>{b.name}<button onClick={() => this.handleClick(b)}>Likes</button></li>)}
        </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        bars: state.bars,
    }
}



export default connect(mapStateToProps)(Bars); 