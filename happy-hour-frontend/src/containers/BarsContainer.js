import React from 'react'
import {connect} from 'react-redux'
import BarInput from '../components/BarInput'
import Bars from '../components/Bars'
import {fetchBars} from '../actions/fetchBars'

class BarsContainer extends React.Component {


    componentDidMount(){
        this.props.fetchBars()
    }

    render(){
        return <div>
            Bars Container
            <BarInput/>
            <Bars bars={this.props.bars}/>
        </div>
    }

}

const mapStateToProps = state => {
    return {
        bars: state.bars
    }
}

export default connect(mapStateToProps, {fetchBars})(BarsContainer);