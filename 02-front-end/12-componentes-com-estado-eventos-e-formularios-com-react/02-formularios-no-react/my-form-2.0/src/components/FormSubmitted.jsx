import React, { Component } from 'react';

class FormSubmitted extends Component {
  render() {
    const {
      currentState: {
        name,
        email,
        cpf,
        address,
        city,
        state,
        addressType,
        resume,
        role,
        roleDescription,
      },
    } = this.props;

    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <p> Name: {name}</p>
        <p> Email: {email}</p>
        <p> CPF: {cpf}</p>
        <p> Endereço: {address}</p>
        <p> Cidade: {city}</p>
        <p> Estado: {state}</p>
        <p> Tipo de residência: {addressType}</p>
        <h3>Profissional</h3>
        <p> Currículo: {resume}</p>
        <p> Cargo: {role}</p>
        <p> Descrição do cargo: {roleDescription}</p>
      </div>
    );
  }
}

export default FormSubmitted;
