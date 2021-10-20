import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <input
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            type="text"
            value={email}
          />
          <input
            name="password"
            onChange={this.handleChange}
            placeholder="Senha"
            type="password"
            value={password}
          />
        </div>
        <Link to="/clients">Fazer login</Link>
      </div>
    );
  }
}

export default Login;
