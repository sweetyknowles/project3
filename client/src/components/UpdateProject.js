import React, { Component } from "react";
import axios from "axios";


class UpdateProject extends Component {
  state = {
    
    updatedProject: {}
  };
  handleChange = event => {
    const project = { ...this.state.project};
    project[event.target.name] = event.target.value;
    this.setState({ project });
  };
  componentDidMount() {
    const project= this.props;
    this.setState({ project: project });
  }
  editUser = event => {
    event.preventDefault();
    const userId = this.props.user._id;
    const payload = this.state.user;
    axios
      .put(`/api/user/${userId}`, payload)
      .then(res => {
          this.setState({ user: res.data })
        console.log("photos!", res.data);
      })
      .catch(err => {
        console.log(err);
      });
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
              placeholder={this.props.user.name}
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
            <label htmlFor="name">Projects: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="projects"
              value={this.state.user.projects}
              placeholder={this.props.user.projects}
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