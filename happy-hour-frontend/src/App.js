
import React from 'react';
import {connect} from 'react-redux'
import BarsContainer from './containers/BarsContainer'

class App extends React.Component {


componentDidMount(){
// this.props.fetchBars()
}


  render () {
    return (
      <div> Happy Hour App Root
      <BarsContainer/>  
      </div>
    )
  }
  
}



export default connect()(App);
