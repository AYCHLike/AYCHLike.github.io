import { connect } from 'react-redux';
import QuestionnaireIndex from './questionnaire_index.jsx';
import { requestAllQuestionnaires } from '../../actions/questionnaire_actions.js';


const mapStateToProps = ({ questionnaires, currentUser }) => {
  // Questionnaires are stored in the state as an object, with their ids pointing
  // to the questionnaire objects themselves (makes it easy to pull them out with the id from the route params),
  // but for this particular component, I need to be able to easily iterate over all of them
  questionnaires = Object.keys(questionnaires).map((id) => {
    return questionnaires[id];
  });
  return {
    questionnaires,
    admin: currentUser.admin
  };
};

export default connect(
  mapStateToProps,
  { requestAllQuestionnaires }
)(QuestionnaireIndex);
