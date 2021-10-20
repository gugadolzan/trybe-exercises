import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login as action } from '../redux/actions';

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
    const { login } = this.props;
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
        <Link onClick={() => login({ email, password })} to="/clients">
          Fazer login
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(action(user)),
});

export default connect(null, mapDispatchToProps)(Login);
