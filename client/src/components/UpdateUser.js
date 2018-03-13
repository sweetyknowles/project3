import React, { Component } from 'react';

class UpdateUser extends Component {


 handleUpdatedUser = event => {
   const attributeName = event.target.name;
   const attributeValue = event.target.value;
   const updatedUser = {
     ...this.props.updatedUser
   };

   updatedDrummer[attributeName] = attributeValue;

   this.setState({ updatedUser });
 };

 editDrummer = event => {
   event.preventDefault();
   this.props.updateDrummer(this.state.updatedUser);
 };

 render() {
   return (
     <div>
       <form onSubmit={this.editUser}>
         
         <div>
           <label htmlFor=“name”>Name: </label>
           <input
             onChange={this.handleuser}
             type=“text”
             name=“name”
             value={this.props.drummer.name}
           />
         </div>
         
        
        
         <div>
           <label htmlFor=“name”>Location: </label>
           <input
             onChange={this.handleuser}
             type=“text”
             name=“location”
             value={this.props.user.location}
           />
         <div>

         <div>
           <label htmlFor=“name”>Styles: </label>
           <input
             onChange={this.handleuser}
             type=“text”
             name=“styles”
             value={this.props.user.styles}
           />
         </div>
         
       </form>
     </div>
   );
 }
}