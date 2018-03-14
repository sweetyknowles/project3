import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NewUserForm from "./NewUserForm";

class Users extends Component {
  state = {
    users: [],
    showNewForm: false
  };
  componentWillMount() {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    const res = await axios.get("/api/user");
    this.setState({ users: res.data });
  };
  toggleShowNewForm = () => {
    this.setState({ showNewForm: !this.state.showNewForm });
  };
  addNewUser = newUser => {
    const newUserList = [...this.state.userList];

    newUserList.push(newUser);

    this.setState({ userList: newUserList });
  };

  render() {
    return (
      <div>
        <h1>Welcome to Your Photography Projects Library</h1>
        {this.state.users.map(user => (
          <Link key={user._id} to={`/${user._id}`}>
            <h3>Name: {user.name}</h3>
          </Link>
        ))}
        <button onClick={this.toggleShowNewForm}>Create New</button>

        {this.state.showNewForm ? (
          <NewUserForm getAllUsers={this.getAllUsers} />
        ) : null}
      </div>
    );
  }
}

export default Users;
