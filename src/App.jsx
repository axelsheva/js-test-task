import React, {Component} from 'react';
import axios from 'axios';

import UsersList from './components/UsersList';
import UserManageForm from './components/UserManageForm';
import Summary from './components/Summary';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      editableUser: null,
    };

    this.handleDeleteUserClick = this.handleDeleteUserClick.bind(this);
    this.handleEditUserClick = this.handleEditUserClick.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get('http://localhost:3001/users').then(res => {
      const users = res.data;
      this.setState({users});
    });
  }

  handleEditUserClick(editableUser) {
    this.setState({editableUser});
  }

  handleDeleteUserClick(id) {
    axios.delete(`http://localhost:3001/users/${id}`).then(() => {
      const users = this.state.users.filter(user => user.id !== id);

      this.setState({users});
    });
  }

  handleUserUpdate(user) {
    axios.put(`http://localhost:3001/users/${user.id}`, user).then(() => {
      const users = [...this.state.users];
      const index = users.findIndex(u => u.id === user.id);
      users[index] = user;

      this.setState({users, editableUser: null});
    });
  }

  handleUserSubmit(user) {
    if (this.state.editableUser !== null) {
      this.handleUserUpdate(user);
    } else {
      axios
        .post('http://localhost:3001/users', user)
        .then(() => this.getUsers());
    }
  }

  render() {
    return (
      <div>
        <h1>Table</h1>
        <UsersList
          users={this.state.users}
          onDeleteClick={this.handleDeleteUserClick}
          onEditClick={this.handleEditUserClick}
        />
        <h1>Form</h1>
        <UserManageForm
          editableUser={this.state.editableUser}
          onUserSubmit={this.handleUserSubmit}
        />
        <h1>Summary</h1>
        <Summary users={this.state.users} />
      </div>
    );
  }
}

export default App;
