import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormError extends Component {
  render() {
    const { formError } = this.props;
    return (
      <div>
        {
          Object.keys(formError).filter((fieldName) => (
            formError[fieldName].length > 0
          )).map((fieldName, i) => (
            <p key={ i }>
              { fieldName }
              { formError[fieldName] }
            </p>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  formError: state.formReducer.formError,
});

export default connect(mapStateToProps)(FormError);
