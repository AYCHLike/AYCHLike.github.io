import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions.js';
import { clearErrors } from '../../actions/error_actions.js';
import SessionForm from './session_form.jsx';

const mapStateToProps = ({ currentUser, errors }, ownProps) => ({
  // going to use formType to determine the type of form (login/signup)
  formType: ownProps.router.location.pathname.slice(1),
  errors
});



export default connect(
  mapStateToProps,
  { login, signup, clearErrors }
)(SessionForm);
