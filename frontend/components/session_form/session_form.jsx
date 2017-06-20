import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // .then(data => this.props.history.push('/'));
  }
  render() {
    const formType = this.props.formType === '/login' ? 'Log In' : 'Sign Up';
    return (
      <section>
        <h1>{formType}</h1>
        <form>
          <label>Username
            <input onChange={this.handleChange('username')}
              value={this.state.username} />
          </label>
          <label>Password
            <input onChange={this.handleChange('password')}
              value={this.state.password} />
          </label>
          <button onClick={e => this.handleSubmit(e)}>{formType}</button>
        </form>
      </section>
    );
  }
}

export default SessionForm;
