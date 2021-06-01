
import React from 'react';
import {connect} from 'react-redux'
import BarsContainer from './containers/BarsContainer'
import MapContainer from './containers/MapContainer';



class App extends React.Component {

  render () {

    return (
      <div> Happy Hour App Root
      <BarsContainer/>  
      <MapContainer/>
      </div>
    )
  }
  
}



export default connect()(App);
