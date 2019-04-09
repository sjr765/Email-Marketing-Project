//SurveyForm shows a form for a user to add input

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(field => (
      <Field
        key={field.name}
        label={field.label}
        type="text"
        name={field.name}
        component={SurveyField}
      />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
            <i className="material-icons right">cancel</i>
          </Link>
          <button className="teal right btn-flat white-text" type="submit">
            {' '}
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'This field is required to submit this form ';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
