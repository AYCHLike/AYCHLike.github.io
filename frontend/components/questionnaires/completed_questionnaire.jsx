import React from 'react';


const CompletedQuestionnaire = ({ questionnaire, userKey }) => {
  const { questions } = questionnaire;
  const response = questions[Object.keys(questions)[0]].responses[userKey];
  const responseTime = userKey !== null ? response.created_at : null;
  const constructedQuestionnaire = Object.keys(questions).map((id) => {
    const question = questions[id];
    // If we haven't selected a user, the response shouldn't show up
    // On the initial render, the user passed in will be null
    const responseBody = userKey !== null ? question.responses[userKey].body : null;
    return (
      <li key={ id } className="clearfix">
        <span className="name-and-label">
          <h3>{ question.name }</h3>
          <h4>{ question.label }</h4>
        </span>
        <span className="response-info">
          <p>{ responseBody }</p>
        </span>
      </li>
    );
  });

  return (
    <section>
      <h2>Responded: { responseTime }</h2>
      <ul>{ constructedQuestionnaire }</ul>
    </section>
    );
};

export default CompletedQuestionnaire;
