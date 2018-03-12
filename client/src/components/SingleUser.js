import React, { Component } from 'react';


class SingleUser extends Component {
  render() {
    return (
      <div>
        
        <h1>Single User</h1>
        
  {/* creatures List */}
  <h1>{this.state.user.name}</h1>
                <p>Description: {this.state.user.description}</p>
                </div>
        );
    }
}

    
    
  


export default SingleUser;