import React from 'react';
import CompletedQuestionnaire from './completed_questionnaire.jsx';


class AdminQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedUserId: null };
    this.buildUserSelectorOptions = this.buildUserSelectorOptions.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  buildUserSelectorOptions () {
    // Creating options displaying respondents' usernames, with each option's value being their id
    const { questionnaire: { questions }} = this.props;

    // I'm just grabbing the responses from one of the questions, we'll require every question
    // in a questionnaire to be answered so every question will have the same respondents
    const responses = questions[Object.keys(questions)[0]].responses;
    let defaultOption;
    let users;
    // If there are responses, build options for each user and set appropriate default option
    if (responses) {
      users = Object.keys(responses).map((userId) => {
        const username = responses[userId].author_name;
        return <option key={ userId } value={ userId }>{ username }</option>;
      });
      defaultOption = <option disabled value="default">Select a Respondent</option>;
    } else {
      defaultOption = <option disabled value="default">No Responses</option>;
    }
    return (
      <select defaultValue="default" onChange={ this.selectUser }>
        { defaultOption }
        { users }
      </select>
    );
  }

  selectUser (e) {
    this.setState({ selectedUserId: e.target.value });
  }

  render () {
    const { questionnaire } = this.props;
    const selectorOptions = this.buildUserSelectorOptions();
    return (
      <section>
        <h1>{ questionnaire.title }</h1>
        { selectorOptions }
        <CompletedQuestionnaire questionnaire={ this.props.questionnaire }
          userId={ this.state.selectedUserId} />
      </section>
    );
  }
}

export default AdminQuestionnaire;
