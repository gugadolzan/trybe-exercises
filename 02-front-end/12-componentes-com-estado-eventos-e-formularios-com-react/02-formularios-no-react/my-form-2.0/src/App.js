import React, { Component } from 'react';

import PersonalForm from './components/PersonalForm';
import ProfessionalForm from './components/ProfessionalForm';
import FormSubmitted from './components/FormSubmitted';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleBlur = this.handleBlur.bind(this);
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
      submitted: false,
    };
  }

  handleBlur({ target: { name, value } }) {
    if (name === 'city' && !isNaN(value[0])) {
      // NaN stands for Not a Number
      this.setState({ [name]: '' });
    }
  }

  handleChange({ target: { name, value } }) {
    if (name === 'name') value = value.toUpperCase();

    this.setState({ [name]: value });
  }

  render() {
    const { handleBlur, handleChange } = this;

    return (
      <>
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
          onClick={() => this.setState({ submitted: true })}
          type="submit"
        >
          Enviar
        </button>
        {this.state.submitted && <FormSubmitted currentState={this.state} />}
      </>
    );
  }
}

export default App;
