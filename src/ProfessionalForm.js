import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeHandler } from './actions';

class ProfessionalFormForm extends Component {
  render() {
    const { changeHandler } = this.props;
    return (
      <fieldset>
        <legend>Dados profissionais:</legend>
        <div className="container">
          Resumo do currículo:
          <textarea
            name="resume"
            maxLength="1000"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          Cargo:
            <input
              type="text"
              name="role"
              maxLength="40"
              required
              onChange={changeHandler}
              onMouseEnter={() => {
                alert('Preencha com cuidado esta informação.');
              }}
            />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea
            name="roleDescription"
            maxLength="500"
            onChange={changeHandler}
          />
        </div>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHandler: ({ target }) => dispatch(changeHandler(target)),
}) 

export default connect(null, mapDispatchToProps)(ProfessionalFormForm);