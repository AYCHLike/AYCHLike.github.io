import { applyMiddleware } from 'redux';
import sessionMiddleware from './session_middleware.js';
import createLogger from 'redux-logger';
import questionnaireMiddleware from './questionnaire_middleware.js';
import responseMiddleware from './response_middleware.js';


const logger = createLogger();

const rootMiddleware = applyMiddleware(
  sessionMiddleware,
  questionnaireMiddleware,
  responseMiddleware,
  logger
);

export default rootMiddleware;
