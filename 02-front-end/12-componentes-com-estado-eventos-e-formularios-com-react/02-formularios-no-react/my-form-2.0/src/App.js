import React, { Component } from 'react';
import states from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados pessoais</legend>

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
            <select id="state" name="state">
              <option disabled value="" selected>
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
              <input id="house" name="addressType" type="radio" value="house" />{' '}
              Casa
            </label>
            <label htmlFor="apartment">
              <input
                id="apartment"
                name="addressType"
                type="radio"
                value="apartment"
              />{' '}
              Apartamento
            </label>
          </label>
        </fieldset>

        <fieldset>
          <legend>Dados do seu último emprego</legend>

          <label htmlFor="resume">
            Resumo do currículo
            <textarea id="resume" maxLength="1000" name="resume" required />
          </label>

          <label htmlFor="role">
            Cargo
            <input maxLength="40" name="role" required type="text" />
          </label>

          <label htmlFor="roleDescription">
            Descrição do cargo:
            <textarea
              id="roleDescription"
              maxLength="500"
              name="roleDescription"
              required
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default App;
