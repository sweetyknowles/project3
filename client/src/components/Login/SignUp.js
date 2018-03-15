import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    const newState = { ...this.state }
    newState[ event.target.name ] = event.target.value
    this.setState(newState)
  }

  saveNewUser = (event) => {
    event.preventDefault()
    this.props.createNewUser(this.state)
    this.setState({ name: '' })
  }

  render () {
    return (
      <div>
        <h1>Create A New User</h1>
        <form onSubmit={this.saveNewUser}>
          <div>
            <label htmlFor="name">User Name</label>
            <input type="text" name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Create New User</button>
        </form>
      </div>

    )
  }
}

export default SignUp