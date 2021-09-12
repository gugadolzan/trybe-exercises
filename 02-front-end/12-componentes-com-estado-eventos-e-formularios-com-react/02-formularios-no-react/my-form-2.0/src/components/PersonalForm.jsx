import React, { Component } from 'react';

import states from '../data';

class PersonalForm extends Component {
  render() {
    const {
      children,
      onBlur,
      onChange,
      values: { name, city },
    } = this.props;

    return (
      <fieldset>
        <legend>{children}</legend>

        <label htmlFor="name">
          Nome:
          <input
            id="name"
            maxLength="40"
            name="name"
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onBlur={onBlur}
            onChange={onChange}
            required
            type="text"
            value={city}
          />
        </label>

        <label htmlFor="state">
          Estado:
          <select
            defaultValue=""
            id="state"
            name="state"
            onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
              type="radio"
              value="apartment"
            />{' '}
            Apartamento
          </label>
        </label>
      </fieldset>
    );
  }
}

export default PersonalForm;
