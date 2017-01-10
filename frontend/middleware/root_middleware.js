import { applyMiddleware } from 'redux';
import sessionMiddleware from './session_middleware.js';
import questionnaireMiddleware from './questionnaire_middleware.js';
import responseMiddleware from './response_middleware.js';

const rootMiddleware = applyMiddleware(
  sessionMiddleware,
  questionnaireMiddleware,
  responseMiddleware
);

export default rootMiddleware;
