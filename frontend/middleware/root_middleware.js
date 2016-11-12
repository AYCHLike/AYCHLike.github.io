import { applyMiddleware } from 'redux';
import sessionMiddleware from './session_middleware.js';
import createLogger from 'redux-logger';


const logger = createLogger();

const rootMiddleware = applyMiddleware(
  sessionMiddleware
);

export default rootMiddleware;
