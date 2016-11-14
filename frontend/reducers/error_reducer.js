import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions.js';

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      const newState = [];
      action.errors.forEach((error) => {
        newState.push(error);
      });
      return newState;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorReducer;
