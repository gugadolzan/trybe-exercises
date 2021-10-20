import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteRegister as action } from '../redux/actions';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordened: false,
    };
  }

  renderRegisters(registers) {
    return registers.map((register) => (
      <div key={register.email}>
        <p>Nome: {register.name}</p>
        <p>Idade: {register.age}</p>
        <p>Email: {register.email}</p>
        <button onClick={() => this.props.deleteRegister(register)}>X</button>
        <br />
      </div>
    ));
  }

  orderRegisters = () => {
    const { registers } = this.props;
    let ordenedRegisters = [...registers];
    return ordenedRegisters.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  };

  render() {
    const { userLogin, registers } = this.props;
    const { ordened } = this.state;
    const registerLink = <Link to="/register">Ir à pagina de cadastro</Link>;

    if (!userLogin.email || !userLogin.password)
      return <div>Login não efetuado</div>;

    if (!registers.length)
      return (
        <div>
          <div>Nenhum cliente cadastrado</div>
          {registerLink}
        </div>
      );

    return (
      <>
        <div>Clientes cadastrados</div>
        <button
          onClick={() =>
            this.setState((state) => ({ ordened: !state.ordened }))
          }
        >
          Ordenar
        </button>
        {this.renderRegisters(ordened ? this.orderRegisters() : registers)}
        {registerLink}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
  registers: state.registerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  deleteRegister: (data) => dispatch(action(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
