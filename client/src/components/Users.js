import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewUserForm from './NewUserForm'

class Users extends Component {
  state = {
    users: [],
    showNewForm: false
  }
  componentWillMount () {
    this.getAllUsers()
  }

  getAllUsers = async () => {
    const res = await axios.get('/api/users')
    this.setState({users: res.data})
  }
  toggleNewUserForm= () => {
    this.setState({toggleNewCreatureForm: !this.state.NewUserForm})
  }
  addNewUser = (newUser) => {
    const newUserList = [ ...this.state.userList ]

    newUserList.push(newUser)

    this.setState({ userList: newUserList })
  }

  render () {
    return (
      <div>
        <h1>Welcome to The Bog</h1>
        {this.state.users.map(user => (
          <Link key={user._id} to={`/${user._id}`}>
            <h3>Name: {user.name}</h3>
            <p>Description: {user.description}</p>
          </Link>
        ))}
        <button onClick={this.toggleNewUserForm}>Create New</button>

        {this.state.NewUserForm ? <NewCreatureForm getAllUser={this.getAllUsers}/> : null}
      </div>
    )
  }
}

export default Users