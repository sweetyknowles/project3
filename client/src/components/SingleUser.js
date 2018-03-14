import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router";
import UpdateUser from "./UpdateUser";
import ProjectUserForm from "./ProjectUserForm";
class SingleUser extends Component {
  state = {
    user: {
      projects: []
    },
    updateUser: false,
    //equipment: [],
    redirect: false,
    projectAdd: false
  };

  toggleShowUpdate = () => {
    this.setState({ updateUser: !this.state.updateUser });
  };

  async componentWillMount() {
    const userId = this.props.match.params.id;
    const res = await axios.get(`/api/user/${userId}`);
    const user = res.data;
    this.setState({ user });
    console.log(this.state.user);
  }

  remove = () => {
    const userId = this.props.match.params.id;
    this.setState({ redirect: true });
    axios
      .delete(`/api/user/${userId}`)
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };

  toggleProjectAdd = () => {
    this.setState({ projectAdd: !this.state.projectAdd})
  }
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    console.log(this.state.user);
    return (
      <div>
        <Link to="/">All Users</Link>
        <h2>Name:{this.state.user.name}</h2>
        <h3>Project List:</h3>

        <button onClick={this.toggleProjectAdd}> Create new Project </button>
        {this.state.projectAdd ? <ProjectUserForm 
        project={this.state.project}
          id={this.props.match.params.id}
        /> : null}

        {this.state.user.projects.map(project => {
          return (
            <div key={project.id}>
              <h4> Project: {project.name}</h4>
              <p> Date: {project.Date}</p>
              <p> Location: {project.location}</p>
              <button onClick={this.remove}>
                Delete {this.state.user.name}
              </button>
              <div>
                <button onClick={this.toggleShowUpdate}>
                  Update {this.state.user.name}
                </button>
              </div>
              {this.state.updateUser ? (
                <UpdateUser user={this.state.user} />
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}
export default SingleUser;
