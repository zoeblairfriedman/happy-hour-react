import React from 'react'
import {connect} from 'react-redux'
import {fetchBarsBackend} from '../actions/fetchBarsBackend'
import Map from '../components/Map';
import {Route} from 'react-router-dom'
import BarSearch from '../components/BarSearch'


class BarsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchBarsBackend()
    }

    render(){
        return(
        <div>

        <div className='sideBySide'>
            <Route path="/bars" render={() => <Map bars={this.props.bars}/>}/>
            <Route path='/bars/new' component={BarSearch}/>
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