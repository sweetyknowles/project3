import React, { Component } from "react";
import axios from "axios";

class UpdateUser extends Component {
  state = {
    user: {},
    updatedUser: {}
  };
  handleChange = event => {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };
  componentDidMount() {
    const user = this.props;
    this.setState({ user: user });
  }
  editUser = event => {
    event.preventDefault();
    const userId = this.props.user._id;
    const payload = this.state.user;
    axios
      .put(`/api/user/${userId}`, payload)
      .then(res => {
        this.setState({ user: res.data });
        //console.log("photos!", res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.props.refreshUser();

      }) 
    
      
  };
  render() {
    return (
      <div>
        <form onSubmit={this.editUser}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.user.name}
              // placeholder={this.props.user.name}
            />
          </div>

          <div>
            <label htmlFor="name">Location: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="location"
              value={this.state.user.location}
              placeholder={this.props.user.location}
            />
          </div>

          <div>
            <button>Update</button>
          </div>
        </form>
      </div>
    );
  }
}
export default UpdateUser;
