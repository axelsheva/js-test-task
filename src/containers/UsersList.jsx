import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {connect} from 'react-redux';

import {dateFormat} from '../const';
import {deleteUserById, selectUser} from '../actions/users';

const UsersList = ({users, onDeleteClick, onEditClick}) => {
  const renderUser = user => {
    const handleDeleteClick = () => onDeleteClick(user.id);
    const handleEditClick = () => onEditClick(user);

    return (
      <tr key={user.id}>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{moment(user.dob, dateFormat).format('DD/MM/YYYY')}</td>
        <td>{user.location}</td>
        <td>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </td>
      </tr>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{users.map(renderUser)}</tbody>
    </table>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const actions = {
  onEditClick: selectUser,
  onDeleteClick: deleteUserById,
};

export default connect(
  mapStateToProps,
  actions,
)(UsersList);
