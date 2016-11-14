import { connect } from 'react-redux';
import EndUserQuestionnaireForm from './end_user_questionnaire_form.jsx';
import { clearErrors } from '../../actions/error_actions.js';
import { submitResponses } from '../../actions/response_actions.js';


const mapStateToProps = ({ errors }) => ({
  errors
});

export default connect(
  mapStateToProps,
  { clearErrors, submitResponses }
)(EndUserQuestionnaireForm);
