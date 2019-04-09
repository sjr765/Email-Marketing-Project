//SurveyFormReview shows users their form inputs for review

import React from 'react';

import { connect } from 'react-redux';

import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  return (
    <div>
      <h5>Please Confirm your entries</h5>
      {formFields.map(({ name, label }) => {
        return (
          <div key={name}>
            <label>{label}</label>
            <div> {formValues[name]}</div>
          </div>
        );
      })}
      <button
        className="yellow darken-2 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        type="submit"
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey <i className="material-icons right">email</i>{' '}
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
