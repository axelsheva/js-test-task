import React from 'react';
import PropTypes from 'prop-types';

class UserManageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      dob: '',
      location: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editableUser !== null) this.setState(nextProps.editableUser);
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onUserSubmit(this.state);
  }

  render() {
    const isSubmitDisabled =
      Object.values(this.state).find(str => str === '') !== undefined;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          First name{' '}
          <input
            value={this.state.first_name}
            onChange={this.handleInputChange}
            name="first_name"
          />
        </div>
        <div>
          Last name{' '}
          <input
            value={this.state.last_name}
            onChange={this.handleInputChange}
            name="last_name"
          />
        </div>
        <div>
          Date of birth{' '}
          <input
            value={this.state.dob}
            onChange={this.handleInputChange}
            name="dob"
          />
        </div>
        <div>
          Location{' '}
          <input
            value={this.state.location}
            onChange={this.handleInputChange}
            name="location"
          />
        </div>
        <button disabled={isSubmitDisabled}>Submit</button>
      </form>
    );
  }
}

UserManageForm.propTypes = {
  onUserSubmit: PropTypes.func.isRequired,
  editableUser: PropTypes.shape({
    id: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    dob: PropTypes.string,
    location: PropTypes.string,
  }),
};

UserManageForm.defaultProps = {
  editableUser: null,
};

export default UserManageForm;
