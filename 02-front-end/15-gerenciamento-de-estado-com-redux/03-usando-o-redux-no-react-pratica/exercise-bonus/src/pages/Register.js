import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
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
    const { name, age, email } = this.state;
    return (
      <div>
        <label htmlFor="name">Nome</label>
        <input
          name="name"
          onChange={this.handleChange}
          type="text"
          value={name}
        />
        <br />
        <label htmlFor="age">Idade</label>
        <input
          name="age"
          onChange={this.handleChange}
          type="number"
          value={age}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          onChange={this.handleChange}
          type="text"
          value={email}
        />
        <br />
        <button type="button">Cadastrar</button>
        <br />
        <Link to="/clients">Clientes Cadastrados</Link>
      </div>
    );
  }
}

export default Register;
