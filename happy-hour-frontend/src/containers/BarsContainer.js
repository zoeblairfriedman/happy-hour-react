import React from 'react'
import {connect} from 'react-redux'
import BarInput from '../components/BarInput'
import {fetchBarsBackend} from '../actions/fetchBarsBackend'
import Map from '../components/Map';


class BarsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchBarsBackend()
    }

    render(){
        return(
        <div>
            
        <div className='sideBySide'>
            <Map bars={this.props.bars}/>
            <BarInput/>
        </div>
     
        </div>
        )
        }
}


const mapStateToProps = state => {
    return {
        bars: state.bars,
    }
}

export default connect(mapStateToProps, {fetchBarsBackend})(BarsContainer);