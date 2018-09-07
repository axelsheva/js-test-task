import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class UserCreation extends React.Component {
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
    this.handleDisableSubmit = this.handleDisableSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post('http://localhost:3001/users', this.state)
      .then(() => this.props.onUserCreate());
  }

  handleDisableSubmit() {
    return Object.values(this.state).find(str => str === '') !== undefined;
  }

  render() {
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
        <button disabled={this.handleDisableSubmit()}>Submit</button>
      </form>
    );
  }
}

UserCreation.propTypes = {
  onUserCreate: PropTypes.func.isRequired,
};

export default UserCreation;
