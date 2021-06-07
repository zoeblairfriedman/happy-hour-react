import React from 'react'
import {connect} from 'react-redux'
import {fetchBarsBackend} from '../actions/fetchBarsBackend'
import Map from '../components/Map';
import {Route, Switch} from 'react-router-dom'
import BarSearch from '../components/BarSearch'
import Bar from '../components/Bar'
import HappyNow from '../components/HappyNow'
// import { clearSelectedBar } from '../actions/clearSelectedBar'

class BarsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchBarsBackend()
    }
    
    render(){

        return(
        <div className="mapContainer">

        <div className='sideBySide'>
            <Switch>
            <Route exact path='/bars/now' component={HappyNow}/>
            <Route path="/bars" render={(routerProps) => <Map {...routerProps} bars={this.props.bars}/>}/>
            </Switch>
            <Bar bar={this.props.selectedBar !== "" ? this.props.selectedBar : ""}/>
            <Route exact path='/bars/new' component={BarSearch}/>
        </div>
            
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

// const mapDispatchToProps = dispatch => {
//     return {
//       fetchBarsBackend: () => {dispatch(fetchBarsBackend())},
//       clearSelectedBar: () => {dispatch(clearSelectedBar())}
//     };
//   };

export default connect(mapStateToProps, {fetchBarsBackend})(BarsContainer);