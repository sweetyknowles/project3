import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Redirect } from "react-router";
import UpdateUser from "./UpdateUser";
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
    this.setState({ projectAdd: !this.state.projectAdd });
  };
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    console.log(this.state.user);
    return (
      <div>
        <NavBar />

        <BodyContentWrapper>
          <h2>Name:{this.state.user.name}</h2>
        
              <div>
                <button onClick={this.toggleShowUpdate}>
                  Edit {this.state.user.name}
                ) : null}
              {this.state.updateUser ? (
                <UpdateUser user={this.state.user} />
              ) : null}
                </button><br/>
                <button onClick={this.remove}>
                Delete {this.state.user.name}
              </button>
              </div>
          <hr />
        

        {this.state.user.projects.map(project => {
          return (
            <div key={project.id}>
              <h4> Project: {project.name}</h4>
              <p> Date: {project.Date}</p>
              <p> Location: {project.location}</p>
              
              <button onClick={this.toggleProjectAdd}> Create new Project </button>
          {this.state.projectAdd ? (
            <ProjectUserForm
              project={this.state.project}
              id={this.props.match.params.id}
            />
          ) : null}
              
            </div>
          );
        })}
         </BodyContentWrapper>
      </div>
    );
  }
}
export default SingleUser;
