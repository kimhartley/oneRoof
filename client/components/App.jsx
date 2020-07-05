// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports

// define class component 
export class App extends React.Component {
  render(){
    return(
      <>
        <h1>Development has begun</h1>
        <h2>Behold I am the App component</h2>
      </>
    )
  }
}

export default connect()(App)