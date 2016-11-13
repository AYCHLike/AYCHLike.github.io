import { connect } from 'react-redux';
import QuestionnaireShow from './questionnaire_show.jsx';
import { requestSingleQuestionnaire } from '../../actions/questionnaire_actions.js';

const mapStateToProps = ({ currentUser, questionnaires}, ownProps) => ({
  // React Router gives us a params prop, so we'll use it to grab the correct questionnaire from the store
  questionnaire: questionnaires[ownProps.params.id],
  admin: currentUser.admin
});

export default connect(
  mapStateToProps,
  { requestSingleQuestionnaire }
)(QuestionnaireShow);
