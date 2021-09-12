import React, { Component } from 'react';

class ProfessionalForm extends Component {
  render() {
    const { children, onChange } = this.props;

    return (
      <fieldset className="form-fieldset">
        <legend>{children}</legend>

        <label htmlFor="resume">
          Resumo do currículo
          <textarea
            id="resume"
            maxLength="1000"
            name="resume"
            onChange={onChange}
            required
          />
        </label>

        <label htmlFor="role">
          Cargo
          <input
            maxLength="40"
            name="role"
            onChange={onChange}
            onMouseEnter={() => alert('Preencha com cuidado esta informação.')}
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
            onChange={onChange}
            required
          />
        </label>
      </fieldset>
    );
  }
}

export default ProfessionalForm;
