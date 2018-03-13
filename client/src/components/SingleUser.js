import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class SingleUser extends Component {
  state = {
    user: {
      projects: []
    },
    equipment: []
  };
  async componentWillMount() {
    const userId = this.props.match.params.id;
    const res = await axios.get(`/api/user/${userId}`);
    const user = res.data;
    this.setState({ user });
  }
  render() {
    console.log(this.state.user);
    return (
      <div>
        <Link to="/">All Users</Link>
        <h1>{this.state.user.name}</h1>
        <h2>{this.state.user.project}</h2>

     {
       this.state.user.projects.map((project) => {
         return (
           <div>
             <h4> Project: {project.name}</h4>
             <p> Date: {project.Date}</p>
             <p> Location: {project.location}</p>

             
            </div>
         )
       })
     }
      
      </div>
    );
  }
}
export default SingleUser;

