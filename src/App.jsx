import React, {Component} from 'react';
import axios from 'axios';

import UsersList from './components/UsersList';
import UserCreation from './components/UserCreation';
import Summary from './components/Summary';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.handleUserDelete = this.handleUserDelete.bind(this);
    this.handleGetUsers = this.handleGetUsers.bind(this);
  }

  componentDidMount() {
    this.handleGetUsers();
  }

  handleUserDelete(id) {
    axios.delete(`http://localhost:3001/users/${id}`).then(res => {
      if (res.status === 200) {
        const users = this.state.users.filter(user => user.id !== id);

        this.setState({users});
      }
    });
  }

  handleGetUsers() {
    axios.get('http://localhost:3001/users').then(res => {
      const users = res.data;
      this.setState({users});
    });
  }

  render() {
    return (
      <div>
        <h1>Table</h1>
        <UsersList
          users={this.state.users}
          onDeleteClick={this.handleUserDelete}
        />
        <h1>Form</h1>
        <UserCreation onUserCreate={this.handleGetUsers} />
        <h1>Summary</h1>
        <Summary users={this.state.users} />
      </div>
    );
  }
}

export default App;
