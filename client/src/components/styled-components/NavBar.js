import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: cornflowerblue;
  font-family: 'Great Vibes', cursive;
  font-size:30px;
  text-align: center;
  margin-bottom: 0px;
`

const Wedwrapper = styled.div`

align-content: center;
height:10%;

`

class NavBar extends Component {
  render () {
    return (
      <NavBarStyles>
        <h1>Photographer Project Library</h1>
        
            <Link to="/"></Link>
            <Link to="/">All Users</Link>
             <Wedwrapper>
                <img src="https://i.imgur.com/Eqxjlr9.jpg" alt="collage"/>
                </Wedwrapper> 
                    
          
      </NavBarStyles>
    )
  }
}

export default NavBar
