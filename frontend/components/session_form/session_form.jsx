import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "Spitfire username",
			password: "Password"
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
    const formType = this.props.formType === '/login' ? 'LOGIN' : 'SIGN UP';
		const form2 = this.props.formType === '/login' ?  "Don't have an account? Sign up here!" : 'Already have an account? Log in here.';
		const url = this.props.formType === '/login' ? '/signup' : '/login';

    return (
			<section className='sess'>
      <section className='session'>
				<h1>Spitfire</h1>

        <form className='sessionForm'>
          <label className='formItem'>Username
            <input onChange={this.handleChange('username')}
              value={this.state.username} />
          </label>

          <label className='formItem'>Password
            <input onChange={this.handleChange('password')}
              value={this.state.password} />
          </label>

					<div className='formItem' >
	          <button onClick={e => this.handleSubmit(e)}>{formType}</button>
					</div>
					<Link to={`${url}`} className='newSession'>{form2}</Link>
        </form>
      </section>

			<section className='features'>
				<h1>Get the right music,</h1>
				<h1>right now</h1>
				<h2>Listen to millions of songs for free.</h2>
				<h3>✓ &nbsp;&nbsp; Search & discover music you'll love</h3>
				<h3>✓ &nbsp;&nbsp; Create playlists of your favorite music</h3>
			</section>
		</section>
    );
  }
}

export default SessionForm;
