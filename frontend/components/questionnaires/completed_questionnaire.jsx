import React from 'react';


const CompletedQuestionnaire = ({ questionnaire, userId }) => {
  const { questions } = questionnaire;
  // Again, it's convenient for the questions to be stored by their ids pointing to
  // the objects themselves, so I'm just making it easier to iterate over in this situation
  const constructedQuestionnaire = Object.keys(questions).map((id) => {
    const question = questions[id];
    // If we haven't selected a user, the response shouldn't show up
    // On the initial render, the user passed in will be null
    const responseBody = userId ? question.responses[userId].body : null;
    const responseTime = userId ? question.responses[userId].created_at : null;
    return (
      <li key={ id }>
        <h3>{ question.name }</h3>
        <h6>{ question.label }</h6>
        <p>{ responseBody }</p>
        <p>{ responseTime }</p>
      </li>
    );
  });

  return <ul>{ constructedQuestionnaire }</ul>;
};

export default CompletedQuestionnaire;
