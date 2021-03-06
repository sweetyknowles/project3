import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Redirect } from "react-router";
import UpdateUser from "./UpdateUser";
import UpdateProject from "./UpdateProject";
import ProjectUserForm from "./ProjectUserForm";
import NavBar from "./styled-components/NavBar";

const BodyContentWrapper = styled.div`
  font-family: "Niconne", cursive;
  text-align: center;
`;


class SingleUser extends Component {
  state = {
    user: {
      projects: []
    },
    updateUser: false,
    //equipment: [],
    redirect: false,
    projectAdd: false,
    updateProject: false
  };

  toggleShowUpdate = () => {
    this.setState({ updateUser: !this.state.updateUser });
  };

  async componentWillMount() {
    this.getSingleUser()
}
getSingleUser = async () => {
  const userId = this.props.match.params.id;
    const res = await axios.get(`/api/user/${userId}`);
    console.log(res.data);
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

  removeProject = projectId => {
    const userId = this.props.match.params.id;
    this.setState({ redirect: true });
    axios
      .delete(`/api/user/${userId}/project/${projectId}`)
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };

  toggleProjectAdd = () => {
    this.setState({ projectAdd: !this.state.projectAdd });
  };
  toggleUpdateProject = () => {
    this.setState({ updateProject: !this.state.updateProject });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    //console.log(this.state.user);

    return (
      <div>
        <NavBar />

        <BodyContentWrapper>
          <h2>Name:{this.state.user.name}</h2>

          <button onClick={this.toggleShowUpdate}>
            Edit {this.state.user.name}
          </button>

          {this.state.updateUser ? <UpdateUser refreshUser={this.getSingleUser} user={this.state.user} /> : null}

          <button onClick={this.remove}>Delete {this.state.user.name}</button>

          <button onClick={this.toggleProjectAdd}> Create new Project </button>
          {this.state.projectAdd ? (
            <ProjectUserForm
              project={this.state.project} 
              refreshProject={this.getSingleUser} 
              id={this.props.match.params.id}
              toggleProjectAdd={this.toggleProjectAdd}
            />
          ) : null}

          <hr />

          {this.state.user.projects.map((project,i)  => {
            return (
              <div key={project._id}>
                <h4> Project: {project.name}</h4>
                <p> Date: {project.date}</p>
                <p> Location: {project.location}</p>
                {/* <Wedwrapper>
                <img src="https://i.imgur.com/Eqxjlr9.jpg" alt="collage"/>
                </Wedwrapper>  */}

                <button onClick={this.toggleUpdateProject}>Edit Project</button>
                {this.state.updateProject ? (
                  <UpdateProject projects={this.state.user.projects[i]} project={this.state.user.projects[i]} getSingleUser={this.getSingleUser}
                  userId = {this.props.match.params.id} toggleUpdateProject={this.toggleUpdateProject} />
                ) : null}

                <button onClick={() => this.removeProject(project._id)}>
                  Delete Project
                </button>

                <div />
              </div>
            );
          })}
        </BodyContentWrapper>
      </div>
    );
  }
}
export default SingleUser;
