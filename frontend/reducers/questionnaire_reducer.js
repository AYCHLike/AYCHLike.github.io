import { RECEIVE_ALL_QUESTIONNAIRES,
         RECEIVE_SINGLE_QUESTIONNAIRE } from '../actions/questionnaire_actions.js';
import merge from 'lodash/merge';

const questionnaireReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONNAIRES: {
      const newState = merge({}, state);
      action.questionnaires.forEach((questionnaire) => {
        newState[questionnaire.id] = questionnaire;
      });
      return newState;
    }
    case RECEIVE_SINGLE_QUESTIONNAIRE: {
      const newState = merge({}, state);
      newState[action.questionnaire.id] = action.questionnaire;
      return newState;
    }
    default:
      return state;
  }
};

export default questionnaireReducer;
