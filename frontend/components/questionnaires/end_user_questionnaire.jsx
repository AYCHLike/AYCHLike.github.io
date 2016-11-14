import React from 'react';
import CompletedQuestionnaire from './completed_questionnaire.jsx';
import EndUserQuestionnaireFormContainer from './end_user_questionnaire_form_container.js';


const EndUserQuestionnaire = ({ questionnaire, currentUser }) => {
  const { questions } = questionnaire;
  const responses = questions[Object.keys(questions)[0]].responses;

  const findUserKey = () => {
    for (let i = 0; i < responses.length; i++) {
      if (responses[i].author_name === currentUser.username) {
        return i;
      }
    }
    return null;
  };
  const questionnaireCompleted = () => {
    // Checking to see if the current user has responded
    if (!responses) {
      return false;
    }
    if (findUserKey() !== null) {
      return true;
    } else {
      return false;
    }
  };
  if (questionnaireCompleted()) {
    return <CompletedQuestionnaire questionnaire={ questionnaire }
      userKey={ findUserKey() } />;
  } else {
    return <EndUserQuestionnaireFormContainer questionnaire={ questionnaire }/>;
  }

};

export default EndUserQuestionnaire;
