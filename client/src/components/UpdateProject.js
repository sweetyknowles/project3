import React, { Component } from "react";
import axios from "axios";

class UpdateProject extends Component {
  state = {
    projects: {},

    updatedProject: {}
  };
  handleChange = event => {
    const name = event.target.name
    const project = { ...this.state.projects };
    project[name] = event.target.value;
    this.setState({ projects: project });
  };
  componentDidMount() {
    const projects = this.props.projects;
    this.setState({ projects });
  }
  editProject = event => {
    event.preventDefault();
    const projectId = this.state.projects._id;
    const payload = this.state.projects;
    console.log(this.props.userId)
    console.log(projectId)
  
    axios
      .put(`/api/user/${this.props.userId}/project/${projectId}`, payload)
      .then(res => {
        this.setState({ projects: res.data });
        console.log("photos!", res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .then (() =>{
        this.props.getSingleUser();
        this.props.toggleUpdateProject();
      })
  };

  render() {

    return (
      <div>
        <form onSubmit={this.editProject}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              onChange={this.handleChange}
              id="name"
              type="text"
              name="name"
              value={this.state.projects.name}
              placeholder={this.props.project.name}
            />
          </div>

          <div>
            <label htmlFor="location">Location: </label>
            <input
              onChange={this.handleChange}
              id="location"
              type="text"
              name="location"
              value={this.state.projects.location}
              placeholder={this.props.project.location}
            />
          </div>
          <div>
            <label htmlFor="date">Date: </label>
            <input
              onChange={this.handleChange}
              id="date"
              type="text"
              name="date"
              value={this.state.projects.date}
              placeholder={this.props.project.date}
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
export default UpdateProject;
