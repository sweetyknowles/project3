import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
class ProjectUserForm extends Component {
  state = {
    project: {
      name: "",
      date: "",
      location: ""
    }
  };

  handleChange = event => {
    const name = event.target.name;
    const newState = { ...this.state.project };
    newState[name] = event.target.value;
    this.setState({ project: newState });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const payload = {
      name: this.state.project.name,
      date: this.state.project.date,
      location: this.state.project.location
    };

    const res = await axios.post(`/api/user/${this.props.id}/project`, payload);
    //await this.props.getAllProject();
    this.setState({
      project: res.data
    });
    console.log("from the submit", res);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.project.name}
          />
        </div>

        <div>
          <label htmlFor="date">Date: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="date"
            value={this.state.project.date}
          />
        </div>

        <div>
          <label htmlFor="location">location: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="location"
            value={this.state.project.location}
          />
        </div>

        <button>Submit</button>
      </form>
    );
  }
}
export default ProjectUserForm;
