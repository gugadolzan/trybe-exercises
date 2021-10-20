import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Clients({ userLogin }) {
  if (!userLogin.email || !userLogin.password)
    return <div>Login não efetuado</div>;

  return (
    <div>
      <Link to="/register">Ir à pagina de cadastro</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
});

export default connect(mapStateToProps)(Clients);
