import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import UsersList from './UsersList';
import Summary from './Summary';
import UserForm from './UserForm';

import {fetchUsers} from '../actions/users';

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h1>Table</h1>
        <UsersList />
        <h1>Summary</h1>
        <Summary />
        <h1>Form</h1>
        <UserForm />
      </div>
    );
  }
}

App.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
};

export default connect(
  null,
  {fetchUsers},
)(App);
