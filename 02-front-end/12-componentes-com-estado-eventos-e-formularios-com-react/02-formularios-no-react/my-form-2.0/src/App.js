import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const states = [
      'AC',
      'AL',
      'AM',
      'AP',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RO',
      'RS',
      'RR',
      'SC',
      'SE',
      'SP',
      'TO',
    ];

    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input id="name" name="name" type="text" />
        </label>

        <label htmlFor="email">
          Email:
          <input id="email" name="email" type="text" />
        </label>

        <label htmlFor="cpf">
          CPF:
          <input id="cpf" name="cpf" type="text" />
        </label>

        <label htmlFor="address">
          Endereço:
          <input id="address" name="address" type="text" />
        </label>

        <label htmlFor="city">
          Cidade:
          <input id="city" name="city" type="text" />
        </label>

        <label htmlFor="state">
          Estado:
          <select id="state" name="state" defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="house">
          Tipo de moradia:
          <label>
            <input id="house" type="radio" name="addressType" value="house" />{' '}
            Casa
          </label>
          <label htmlFor="apartment">
            <input
              id="apartment"
              type="radio"
              name="addressType"
              value="apartment"
            />{' '}
            Apartamento
          </label>
        </label>
      </form>
    );
  }
}

export default App;
