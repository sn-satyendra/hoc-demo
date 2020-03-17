/**
 * Container component responsible for all the state management
 * for all child components inside it.
 */

import React, {Component} from 'react';
import { fetchData } from './utils/FetchUtils';
import UserList from "./components/UserList/UserList";
import EnhancedUserList from "./components/UserList/EnhancedUserList";
import './App.css';

class App extends Component {
  state = { 
    usersList1: [],
    usersList2: [],
    usersList3: []
  };

  componentDidMount() {
    const api = "https://api.randomuser.me/?results=50"
    const count = 50;
    fetchData(
      api,
      count,
      users => this.setState({usersList1: users})
    );

    fetchData(
      api,
      count,
      users => this.setState({usersList2: users})
    );

    fetchData(
      api,
      count,
      users => this.setState({usersList3: users})
    );
  }

  render() {
    const {usersList1, usersList2, usersList3} = this.state;
    return (
      <div className="App">
        <div className="list1">
          <UserList users={usersList1}/>
        </div>
        <div className="list2">
          <EnhancedUserList users={usersList2}/>
        </div>
        <div className="list2">
          <EnhancedUserList users={usersList3}/>
        </div>
      </div>
    );
  }
}

export default App;
