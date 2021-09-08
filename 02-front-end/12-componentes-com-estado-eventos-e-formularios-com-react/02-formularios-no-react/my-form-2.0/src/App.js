import React, { Component } from 'react';
import states from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
    };
  }

  handleChange({ target: { name, value } }) {
    if (name === 'name') value = value.toUpperCase();

    this.setState({ [name]: value });
  }

  render() {
    const { handleChange } = this;
    const { name } = this.state;

    return (
      <form>
        <fieldset>
          <legend>Dados pessoais</legend>

          <label htmlFor="name">
            Nome:
            <input
              id="name"
              maxLength="40"
              name="name"
              onChange={handleChange}
              required
              type="text"
              value={name}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              maxLength="50"
              name="email"
              onChange={handleChange}
              required
              type="text"
            />
          </label>

          <label htmlFor="cpf">
            CPF:
            <input
              id="cpf"
              maxLength="11"
              name="cpf"
              onChange={handleChange}
              required
              type="text"
            />
          </label>

          <label htmlFor="address">
            Endereço:
            <input
              id="address"
              maxLength="200"
              name="address"
              onChange={handleChange}
              required
              type="text"
            />
          </label>

          <label htmlFor="city">
            Cidade:
            <input
              id="city"
              maxLength="28"
              name="city"
              onChange={handleChange}
              required
              type="text"
            />
          </label>

          <label htmlFor="state">
            Estado:
            <select
              defaultValue=""
              id="state"
              name="state"
              onChange={handleChange}
              required
            >
              <option disabled value="">
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
              <input
                id="house"
                name="addressType"
                onChange={handleChange}
                type="radio"
                required
                // Reference: <https://stackoverflow.com/questions/8287779/how-to-use-the-required-attribute-with-a-radio-input-field>
                value="house"
              />{' '}
              Casa
            </label>
            <label htmlFor="apartment">
              <input
                id="apartment"
                name="addressType"
                onChange={handleChange}
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
            <textarea
              id="resume"
              maxLength="1000"
              name="resume"
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="role">
            Cargo
            <input
              maxLength="40"
              name="role"
              onChange={handleChange}
              required
              type="text"
            />
          </label>

          <label htmlFor="roleDescription">
            Descrição do cargo:
            <textarea
              id="roleDescription"
              maxLength="500"
              name="roleDescription"
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default App;
