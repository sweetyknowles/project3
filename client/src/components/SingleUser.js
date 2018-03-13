import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router"

class SingleUser extends Component {
  state = {
    user: {
      projects: []
    },
    equipment: [],
    redirect:false
  };
  async componentWillMount() {
    const userId = this.props.match.params.id;
    const res = await axios.get(`/api/user/${userId}`);
    const user = res.data;
    this.setState({ user });
  }

  remove = () =>{
    const userId= this.props.match.params.id
   this.setState({ redirect:true })
   axios.delete(`/api/user/${userId}`)
  .then(res => {})
  .catch(err => {
    console.log(err)
  })
}
  render() {
    if(this.state.redirect === true) {
      return <Redirect to="/" />
    }

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
             <button onClick={this.remove}>
        Delete {this.state.user.name}
        </button>
             
            </div>
            
         )
       })
     }
      
      </div>
    );
  }
}
export default SingleUser;

