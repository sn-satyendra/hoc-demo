/**
 * This is the Enhanced UserList which is created by using the HOC,
 * withLoadingSpinner which takes the responsibilty of rendering the
 * spinner while the users are being loaded.
 */

import React, { Component } from "react";
import User from "../User/User";
import withLoadingSpinner from "../WithLoadSpinner/WithLoadSpinner";

class UserList extends Component {
  render() {
    const {users} = this.props;
    return (
      <div>
        {users.map(u => <User key={u.email} details={u}/>)}
      </div>
    );
  }
}

export default withLoadingSpinner(UserList, 'users');
