import React from 'react';


class EndUserQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
  }

  questionnaireCompleted () {
    // Checking to see if the current user's id is present in the responses
    const { questionnaire: { questions }, currentUser } = this.props;
    return Object.keys(questions.responses).includes(currentUser.id);
  }

  render () {

  }
}
