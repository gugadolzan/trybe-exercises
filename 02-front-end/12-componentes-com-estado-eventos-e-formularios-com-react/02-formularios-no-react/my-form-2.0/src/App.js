import React, { Component } from 'react';

import PersonalForm from './components/PersonalForm';
import ProfessionalForm from './components/ProfessionalForm';
import FormSubmitted from './components/FormSubmitted';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.initialState = {
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
      submitted: false,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = this.initialState;
  }

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // Reference: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

  handleBlur({ target: { name, value } }) {
    if (name === 'city' && !isNaN(value[0])) {
      // NaN stands for Not a Number
      this.setState({ [name]: '' });
    }

    if (name === 'email' && !this.validateEmail(value)) {
      this.setState({ [name]: 'Email inválido' });
    }
  }

  handleChange({ target: { name, value } }) {
    if (name === 'name') value = value.toUpperCase();

    this.setState({ [name]: value });
  }

  render() {
    const { handleBlur, handleChange } = this;

    return (
      <div className="App">
        <div>
          <form>
            <PersonalForm
              onBlur={handleBlur}
              onChange={handleChange}
              values={this.state}
            >
              Dados pessoais
            </PersonalForm>
            <ProfessionalForm onChange={handleChange}>
              Dados do seu último emprego
            </ProfessionalForm>
          </form>
          <button
            className="form-button"
            onClick={() => this.setState({ submitted: true })}
            type="submit"
          >
            Enviar
          </button>
          <button
            className="form-button"
            onClick={() => this.setState(this.initialState)}
            type="reset"
          >
            Limpar
          </button>
        </div>
        {this.state.submitted && <FormSubmitted currentState={this.state} />}
      </div>
    );
  }
}

export default App;
