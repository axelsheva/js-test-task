import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {dateFormat} from '../const';

const UsersList = ({users, onDeleteClick}) => {
  const renderUser = user => {
    const handleDeleteClick = () => onDeleteClick(user.id);

    return (
      <tr key={user.id}>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{moment(user.dob, dateFormat).format('DD/MM/YYYY')}</td>
        <td>{user.location}</td>
        <td>
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
  users: PropTypes.arrayOf(PropTypes.object),
  onDeleteClick: PropTypes.func.isRequired,
};

UsersList.defaultProps = {
  users: [],
};

export default UsersList;
