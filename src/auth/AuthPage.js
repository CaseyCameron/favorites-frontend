import { Component } from 'react';
import './AuthPage.css';

import React, { Component } from 'react'

export default class AuthPage extends Component {
  state = {
    isSignup: true,
    name: '',
    email: '',
    password: '',
    error: ''
  }

  handleSwitch = () => {
    this.setState({ isSignUp: !this.state.isSignup });
  }

  handleSubmit = async e => {
    const { isSignUp } = this.state;
    const { onUser, history } = this.state;

    e.preventDefault();

    this.setState({ error: '' });

  }

  render() {
    const { isSignup, name, email, password, error } = this.state;

    return (
      <form className="AuthPage" onSubmit={this.handleSubmit}>
        {isSignUp && <p>
          <label>
            <span>Name</span>
            <input name="name" value={name} required={true}
              onChange={this.handleNameChange}
            />
          </label>
        </p>}

        <p>
          <label>
            <span>Email</span>
            <input name="email" required={true}
              value={email} onChange={this.handleEmailChange} />
          </label>
        </p>

        <p>
          <label>
            <span>Password</span>
            <input name="email" type="password" required={true}
              value={password} onChange={this.handlePasswordChange} />
          </label>
        </p>

        <p>
          <button>{isSignup ? 'Sign Up' : 'Log in'}</button>
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
    )
  }
}
