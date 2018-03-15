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
`

class NavBar extends Component {
  render () {
    return (
      <NavBarStyles>
        <h1>Photographer Project Library</h1>
        
            <Link to="/"></Link>
            <Link to="/">All Users</Link>
            
                    
          
      </NavBarStyles>
    )
  }
}

export default NavBar
