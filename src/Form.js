import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetForm, sendForm } from './actions';
import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm'

class Form extends Component {
  render() {
    const { sendForm, resetForm, } = this.props;

    return (
      <form>
        <PersonalForm />
        <ProfessionalForm />
        <input
            type="button"
            onClick={ sendForm }
            value="Enviar"
        />
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendForm: () => dispatch(sendForm()),
  resetForm: () => dispatch(resetForm()),
});

export default connect(null, mapDispatchToProps)(Form);