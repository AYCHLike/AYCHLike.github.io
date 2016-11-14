import * as QuestActions from '../actions/questionnaire_actions.js';
import * as QuestAPI from '../util/questionnaire_api_util.js';
import { receiveErrors } from '../actions/error_actions.js';

const questionnaireMiddleware = ({ dispatch }) => (next) => (action) => {
  const error = (data) => dispatch(receiveErrors(data.responseJSON));

  switch (action.type) {
    case QuestActions.REQUEST_ALL_QUESTIONNAIRES: {
      const success = (data) => dispatch(QuestActions.receiveAllQuestionnaires(data));
      return QuestAPI.fetchAllQuestionnaires(success, error);
    }
    case QuestActions.REQUEST_SINGLE_QUESTIONNAIRE: {
      const success = (data) => dispatch(QuestActions.receiveSingleQuestionnaire(data));
      return QuestAPI.fetchSingleQuestionnaire(action.id, success, error);
    }
    case QuestActions.SUBMIT_QUESTIONNAIRE: {
      const success = (data) => dispatch(QuestActions.receiveSingleQuestionnaire(data));
      return QuestAPI.createQuestionnaire(action.questionnaire, action.questions, success, error);
    }
    default:
      return next(action);
  }
};

export default questionnaireMiddleware;
