import React from 'react'
import {connect} from 'react-redux'
import {fetchBarsBackend} from '../actions/fetchBarsBackend'
import Map from '../components/Map';
import {Route, Switch} from 'react-router-dom'
import BarSearch from '../components/BarSearch'
import Bar from '../components/Bar'
import HappyNow from '../components/HappyNow'

class BarsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchBarsBackend()
    }
    
    render(){

        return(
        <div>

        <div className='sideBySide'>
            <Switch>
            <Route exact path='/bars/now' component={HappyNow}/>
            <Route path="/bars" render={(routerProps) => <Map {...routerProps} bars={this.props.bars}/>}/>
            </Switch>
            <Route exact path='/bars/new' component={BarSearch}/>
        </div>
            <Bar bar={this.props.selectedBar !== "" ? this.props.selectedBar : ""}/>
        </div>
        )
        }
}


const mapStateToProps = state => {
    return {
        bars: state.bars,
        selectedBar: state.selectedBar
    }
}

export default connect(mapStateToProps, {fetchBarsBackend})(BarsContainer);