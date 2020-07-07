import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchArtists } from '../actions/artists'

import Artist from './Artist'
import player from './player'
import artistsPage from './artistsPage'

export class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchArtists())
  }

  render() {

    return (
      <Router>

        <div >

          <div>

            <Link to='/'>
              <img className="card-img" src="/logo.jpg"></img>
            </Link>

          </div>

          <div className="screen">

            <Route exact path="/:name" component={Artist} />
            <Route exact path="/player" component={player} />
            <Route exact path="/" component={artistsPage} />

          </div>

        </div>
      </Router>
    )
  }
}

export default connect()(App)