import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';

class App extends Component {
  render() {
    const { submitted } = this.props;
    console.log(submitted);

    return (
      <main>
        <Form />
        <div className="container">
          <FormError />
        </div>
        { submitted && <FormDataDisplay /> }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  submitted: state.formReducer.submitted
});
 
export default connect(mapStateToProps)(App);
