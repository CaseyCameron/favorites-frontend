import React, { Component } from 'react';
import { signUp, logIn } from '../utils/utils.js';
import './AuthPage.css';

export default class AuthPage extends Component {
  state = {
    isSignUp: true,
    name: '',
    email: '',
    password: '',
    error: ''
  }

  handleSwitch = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  }

  handleSubmit = async e => {
    const { isSignUp } = this.state;
    const { onUser, history } = this.props;

    e.preventDefault();

    this.setState({ error: '' });

    try {
      const user = isSignUp ? (await signUp(this.state)) : (await logIn(this.state));

      onUser(user);

      history.push('/gifs');
    }
    catch (err) {
      this.setState({ error: err.error });
    }

  }

  handleChange = e => {
    const obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  render() {
    const { isSignUp, name, email, password, error } = this.state;

    return (
      <form className="AuthPage" onSubmit={this.handleSubmit}>
        {isSignUp && <p>
          <label>
            <span>Name</span>
            <input name="name" value={name} required={true}
              onChange={this.handleChange}
            />
          </label>
        </p>}

        <p>
          <label>
            <span>Email</span>
            <input name="email" required={true}
              value={email} onChange={this.handleChange} />
          </label>
        </p>

        <p>
          <label>
            <span>Password</span>
            <input name="password" type="password" required={true}
              value={password} onChange={this.handleChange} />
          </label>
        </p>

        <p>
          <button>{isSignUp ? 'Sign Up' : 'Log in'}</button>
        </p>

        <p>
          <button type="button" className="switch" onClick={this.handleSwitch}>
            {isSignUp
              ? 'Have an account?'
              : 'Create an account'
            }
          </button>
        </p>

        {error && <p>{error}</p>}
      </form>
    );
  }
}
