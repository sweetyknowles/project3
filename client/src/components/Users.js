import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import NewUserForm from "./NewUserForm";
import NavBar from "./styled-components/NavBar";

const ContentWrapper = styled.div`
  font-family: "Dancing Script", cursive;
  text-align: center;
`;

const ImageWrapper = styled.div`
img {
  width:20%;
}
`

class Users extends Component {
  state = {
    users: [],
    showNewForm: false
  };
  componentWillMount() {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    const res = await axios.get("/api/user");
    this.setState({ users: res.data });
  };
  toggleShowNewForm = () => {
    this.setState({ showNewForm: !this.state.showNewForm });
  };
  addNewUser = newUser => {
    const newUserList = [...this.state.userList];

    newUserList.push(newUser);

    this.setState({ userList: newUserList });
  };

  render() {
    return (
      <div>
        <NavBar />
        <ContentWrapper>
          <h1>Get Organized!</h1>
          <ImageWrapper>
          <img src="https://i.imgur.com/HbugK1a.jpg" alt="collage"/>
          </ImageWrapper>
          <button onClick={this.toggleShowNewForm}>Sign Up</button>
          {this.state.showNewForm ? (
            <NewUserForm getAllUsers={this.getAllUsers} />
          ) : null}

          {this.state.users.map(user => (
            <Link key={user._id} to={`/${user._id}`}>
              <h3>
                Photography Projects by:<br />
                {user.name}
              </h3>
              <hr />
            </Link>
          ))}
        </ContentWrapper>
      </div>
    );
  }
}

export default Users;
