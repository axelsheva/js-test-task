import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {connect} from 'react-redux';

import {dateFormat} from '../const';

const Summary = ({users}) => {
  if (!users.length) {
    return 'Loading...';
  }

  const usersFromKievCount = users.filter(
    user => user.location === 'Kiev' || user.location === 'kiev',
  ).length;

  const sumThreeOldestAges = [...users]
    .sort((left, right) =>
      moment(left.dob, dateFormat).diff(moment(right.dob, dateFormat)),
    )
    .slice(0, 3)
    .reduce(
      (prev, curr) =>
        prev + moment().diff(moment(curr.dob, dateFormat), 'years'),
      0,
    );

  const maxNameLenUser = users
    .map(user => ({
      ...user,
      nameLength: (user.first_name + user.last_name).length,
    }))
    .reduce(
      (prev, curr) =>
        prev === undefined || curr.nameLength > prev.nameLength ? curr : prev,
      undefined,
    );

  return (
    <dl>
      <dt>Count of users from Kiev or kiev</dt>
      <dd>{usersFromKievCount}</dd>
      <dt>Sum of ages of three oldest users from table</dt>
      <dd>{sumThreeOldestAges}</dd>
      <dt>Longest string of first name + last name pair</dt>
      <dd>
        {maxNameLenUser.first_name} {maxNameLenUser.last_name}
      </dd>
    </dl>
  );
};

Summary.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Summary);
