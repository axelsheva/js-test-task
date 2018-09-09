import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {createUser, updateUser, changeUserFormInput} from '../actions/userForm';

const UserForm = props => {
  const isEdit = !!props.userForm.id;
  const handleInputChange = e => {
    const {name, value} = e.target;

    return props.changeUserFormInput(name, value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (isEdit) {
      props.updateUser(props.userForm);
    } else {
      props.createUser(props.userForm);
    }
  };
  const isSubmitDisabled =
    !props.userForm.first_name.length ||
    !props.userForm.last_name.length ||
    !props.userForm.dob.length ||
    !props.userForm.location.length;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        First name{' '}
        <input
          value={props.userForm.first_name}
          onChange={handleInputChange}
          name="first_name"
        />
      </div>
      <div>
        Last name{' '}
        <input
          value={props.userForm.last_name}
          onChange={handleInputChange}
          name="last_name"
        />
      </div>
      <div>
        Date of birth{' '}
        <input
          value={props.userForm.dob}
          onChange={handleInputChange}
          name="dob"
        />
      </div>
      <div>
        Location{' '}
        <input
          value={props.userForm.location}
          onChange={handleInputChange}
          name="location"
        />
      </div>
      <button disabled={isSubmitDisabled}>Submit</button>
    </form>
  );
};

UserForm.propTypes = {
  createUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  changeUserFormInput: PropTypes.func.isRequired,
  userForm: PropTypes.shape({
    id: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  userForm: state.userForm,
});

export default connect(
  mapStateToProps,
  {createUser, updateUser, changeUserFormInput},
)(UserForm);
