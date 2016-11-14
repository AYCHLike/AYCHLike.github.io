export const SUBMIT_RESPONSES = "SUBMIT_RESPONSES";
export const RECEIVE_RESPONSES = "RECEIVE_RESPONSES";

export const submitResponses = (responses, questionnaireId) => ({
  type: SUBMIT_RESPONSES,
  responses,
  questionnaireId
});

export const receiveResponses = (responses, questionnaireId) => ({
  type: RECEIVE_RESPONSES,
  responses,
  questionnaireId
});
