export const REQUEST_ALL_QUESTIONNAIRES = "REQUEST_ALL_QUESTIONNAIRES";
export const REQUEST_SINGLE_QUESTIONNAIRE = "REQUEST_SINGLE_QUESTIONNAIRE";
export const SUBMIT_QUESTIONNAIRE = "SUBMIT_QUESTIONNAIRE";
export const RECEIVE_ALL_QUESTIONNAIRES = "RECEIVE_ALL_QUESTIONNAIRES";
export const RECEIVE_SINGLE_QUESTIONNAIRE = "RECEIVE_SINGLE_QUESTIONNAIRE";

export const requestAllQuestionnaires = () => ({
  type: REQUEST_ALL_QUESTIONNAIRES
});

export const requestSingleQuestionnaire = (id) => ({
  type: REQUEST_SINGLE_QUESTIONNAIRE,
  id
});

export const submitQuestionnaire = (questionnaire, questions) => ({
  type: SUBMIT_QUESTIONNAIRE,
  questionnaire,
  questions
});

export const receiveAllQuestionnaires = (questionnaires) => ({
  type: RECEIVE_ALL_QUESTIONNAIRES,
  questionnaires
});

export const receiveSingleQuestionnaire = (questionnaire) => ({
  type: RECEIVE_SINGLE_QUESTIONNAIRE,
  questionnaire
});
