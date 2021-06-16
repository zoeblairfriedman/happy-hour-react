
import React from 'react';
import BarsContainer from './containers/BarsContainer'
import NavBar from './NavBar'

// console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

class App extends React.Component {



  render () {

    return (
      <div>
      <NavBar/>
      <BarsContainer/>  
      </div>
    )
  }
  
}




export default App;
