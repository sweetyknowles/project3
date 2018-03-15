import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  render () {
    return (
      <div>
        <h1>Photo projects</h1>
        <Link to="/LoginPage">Please Log In To Get Started</Link>
      </div>
    )
  }
}

export default Home