import { connect } from 'react-redux';
import AdminQuestionnaireForm from './admin_questionnaire_form.jsx';
import { submitQuestionnaire } from '../../actions/questionnaire_actions.js';
import { receiveErrors, clearErrors } from '../../actions/error_actions.js';

const mapStateToProps = ({ errors }) => ({
  errors
});

export default connect(
  mapStateToProps,
  { submitQuestionnaire, receiveErrors, clearErrors }
)(AdminQuestionnaireForm);
