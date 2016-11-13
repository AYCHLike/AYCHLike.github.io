import React from 'react';
import CompletedQuestionnaire from './completed_questionnaire.jsx';


class AdminQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedUserId: null };
    // this.buildQuestionnaire = this.buildQuestionnaire.bind(this);
    this.buildUserSelectorOptions = this.buildUserSelectorOptions.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  // buildQuestionnaire (userId) {
  //   const { questionnaire: { questions }} = this.props;
  //   // Again, it's convenient for the questions to be stored by their ids pointing to
  //   // the objects themselves, so I'm just making it easier to iterate over in this situation
  //   return Object.keys(questions).map((id) => {
  //     const question = questions[id];
  //     // If we haven't selected a user, the response shouldn't show up
  //     // On the initial render, the user passed in will be null
  //     const responseBody = userId ? question.responses[userId].body : null;
  //     const responseTime = userId ? question.responses[userId].created_at : null;
  //     return (
  //       <li key={ id }>
  //         <h3>{ question.name }</h3>
  //         <h6>{ question.label }</h6>
  //         <p>{ responseBody }</p>
  //         <p>{ responseTime }</p>
  //       </li>
  //     );
  //   });
  // }

  buildUserSelectorOptions () {
    // Creating options displaying respondents' usernames, with each option's value being their id
    const { questionnaire: { questions }} = this.props;

    // I'm just grabbing the responses from one of the questions, we'll require every question
    // in a questionnaire to be answered so every question will have the same respondents
    const responses = questions[Object.keys(questions)[0]].responses;
    return Object.keys(responses).map((userId) => {
      const username = responses[userId].author_name;
      return <option key={ userId } value={ userId }>{ username }</option>;
    });
  }

  selectUser (e) {
    this.setState({ selectedUserId: e.target.value });
  }

  render () {
    const { questionnaire } = this.props;
    return (
      <section>
        <h1>{ questionnaire.title }</h1>
        <select defaultValue="default" onChange={ this.selectUser }>
          <option disabled value="default">Select a Respondent</option>
          { this.buildUserSelectorOptions() }
        </select>
        <CompletedQuestionnaire questionnaire={ this.props.questionnaire }
          userId={ this.state.selectedUserId} />
      </section>
    );
  }
}

export default AdminQuestionnaire;
