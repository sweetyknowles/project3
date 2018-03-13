import React, { Component } from "react";
import axios from "axios";


class NewUserForm extends Component {
  state = {
    
    name: "",
    location: "",
    equipment: "",
  };

  handleChange = event => {
    const name = event.target.name;
    const newState = { ...this.state };
    newState[name] = event.target.value;
    this.setState(newState);
  };
  handleSubmit = async event => {
    event.preventDefault();
    const payload = {
      
      name: this.state.name,
      project: this.state.project,
      location: this.state.location,
      equipment: this.state.equipment
    };
    await axios.post("/api/user", payload);
    await this.props.getAllUsers();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Image URL: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="image"
            value={this.state.image}
          />
        </div>
        <div>
          <label htmlFor="description">Name: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="description">Project: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="project"
            value={this.state.project}
          />
        </div>
        
        <div>
          <label htmlFor="description">Venue: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="location"
            value={this.state.location}
          />
        </div>
        <div>
          <label htmlFor="description">Date: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="date"
            value={this.state.date}
          />
        </div>
        <div>
          <label htmlFor="description">type: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="type"
            value={this.state.type}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}
export default NewUserForm;