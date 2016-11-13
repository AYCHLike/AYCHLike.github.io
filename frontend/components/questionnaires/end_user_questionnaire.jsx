import React from 'react';
import CompletedQuestionnaire from './completed_questionnaire.jsx';
import EndUserQuestionnaireForm from './end_user_questionnaire_form.jsx';


const EndUserQuestionnaire = ({ questionnaire, currentUser }) => {
  const questionnaireCompleted = () => {
    // Checking to see if the current user's id is present in the responses
    const { questions } = questionnaire;
    const responses = questions[Object.keys(questions)[0]].responses;
    return Object.keys(responses).includes(String(currentUser.id));
  };

  if (questionnaireCompleted()) {
    return <CompletedQuestionnaire questionnaire={ questionnaire }
      userId={ currentUser.id } />;
  } else {
    return <EndUserQuestionnaireForm questionnaire={ questionnaire } />;
  }

};

export default EndUserQuestionnaire;
