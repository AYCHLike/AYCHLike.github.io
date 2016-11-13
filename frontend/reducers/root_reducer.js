import sessionReducer from './session_reducer.js';
import errorReducer from './error_reducer.js';
import questionnaireReducer from './questionnaire_reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: sessionReducer,
  errors: errorReducer,
  questionnaires: questionnaireReducer
});

export default rootReducer;
