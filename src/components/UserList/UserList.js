/**
 * A simple component which renders the list of users
 * provided as prop to it. 
 * If the prop is not present we show a loading indicator.
 */

import React, { Component } from "react";
import User from "../User/User";
import Spinner from '../Spinner/Spinner';
import isEmpty from "lodash/isEmpty";

export default class UserList extends Component {
  render() {
    const {users} = this.props;
    const isUsersEmpty = isEmpty(users);
    return (
      <div>
        {isUsersEmpty && <Spinner />}
        {!isUsersEmpty && users.map(u => <User key={u.email} details={u}/>)}
      </div>
    );
  }
}
