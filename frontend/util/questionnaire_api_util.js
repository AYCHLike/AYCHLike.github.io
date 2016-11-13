export const fetchAllQuestionnaires = (success, error) => {
  return $.ajax({
    method: 'GET',
    url: '/api/questionnaires',
    success,
    error
  });
};

export const fetchSingleQuestionnaire = (id, success, error) => {
  return $.ajax({
    method: 'GET',
    url: `/api/questionnaires/${id}`,
    success,
    error
  });
};

export const createQuestionnaire = (questionnaire, success, error) => {
  return $.ajax({
    method: 'POST',
    url: '/api/questionnaires',
    data: { questionnaire },
    success,
    error
  });
};
