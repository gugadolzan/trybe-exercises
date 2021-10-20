import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Clients({ userLogin, registers }) {
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
      <br />
      {registers.map((register) => (
        <div key={register.email}>
          <p>Nome: {register.name}</p>
          <p>Idade: {register.age}</p>
          <p>Email: {register.email}</p>
          <br />
        </div>
      ))}
      {registerLink}
    </>
  );
}

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
  registers: state.registerReducer,
});

export default connect(mapStateToProps)(Clients);
