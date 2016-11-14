import * as ResponseActions from '../actions/response_actions.js';
import { createResponses } from '../util/response_api_util.js';
import { receiveErrors } from '../actions/error_actions.js';


const responseMiddleware = ({ dispatch }) => (next) => (action) => {
  const error = (data) => dispatch(receiveErrors(data.responseJSON));

  switch (action.type) {
    case ResponseActions.SUBMIT_RESPONSES:
      const success = (data) => dispatch(ResponseActions.receiveResponses(data, action.questionnaireId));
      return createResponses(action.responses, success, error);
    default:
      next(action);
  }
};

export default responseMiddleware;
