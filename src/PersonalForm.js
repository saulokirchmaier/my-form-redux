import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeHandler, errorHandler } from './actions';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class PersonalForm extends Component {
  constructor(props) {
    super(props);

    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.updateError = this.updateError.bind(this);
  }
  onBlurHandler = (event) => {
    const { changeHandler } = this.props;
    let { name, value } = event.target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    changeHandler({ target: { name, value } });
  }

  changeInput = (event) => {
    const { changeHandler, errorHandler } = this.props;
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);
    const error = this.updateError(name, value);
    errorHandler({ target: { name, error } });
    changeHandler({ target: { name, value } });
  }

  validateAddress = (address) => address.replace(/[^\w\s]/gi, '');

  updateError(name, value) {
    switch (name) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        return '';
    }
  }

  render() {
    const { currentState } = this.props;
    return (
      <fieldset>
            <legend>Dados pessoais</legend>
            <div className="container">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
                value={currentState.name}
                onChange={this.changeInput}
              />
            </div>
            <div className="container">
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                onChange={this.changeInput}
              />
            </div>
            <div className="container">
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
                onChange={this.changeInput}
              />
            </div>
            <div className="container">
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
                onChange={this.changeInput}
              />
            </div>
            <div className="container">
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                value={currentState.city}
                onBlur={this.onBlurHandler}
                onChange={this.changeInput}
              />
            </div>
            <div className="container">
              Estado:
              <select
                name="countryState"
                required
                onChange={this.changeInput}
                defaultValue=""
              >
                <option value="">Selecione</option>
                {
                  states.map((value, key) => (
                    <option key={ key }>{ value }</option>
                  ))
                }
              </select>
            </div>
            <div className="container">
              <label htmlFor="house">
                <input
                  type="radio"
                  id="house"
                  name="addressType"
                  value="house"
                  onChange={this.changeInput}
                />
                Casa
              </label>
              <label htmlFor="apart">
                <input
                  type="radio"
                  id="apart"
                  name="addressType"
                  value="apartment"
                  onChange={this.changeInput}
                />
                Apartamento
              </label>
            </div>
          </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  currentState: state.formReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeHandler: ({ target }) => dispatch(changeHandler(target)),
  errorHandler: ({ target }) => dispatch(errorHandler(target)),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);
