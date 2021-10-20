import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRegister as action } from '../redux/actions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit() {
    const { addRegister } = this.props;
    addRegister(this.state);
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    const { userLogin } = this.props;
    const { name, age, email } = this.state;

    if (!userLogin.email || !userLogin.password)
      return <div>Login não efetuado</div>;

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
        <button onClick={this.onSubmit} type="button">
          Cadastrar
        </button>
        <br />
        <Link to="/clients">Clientes Cadastrados</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addRegister: (data) => dispatch(action(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
