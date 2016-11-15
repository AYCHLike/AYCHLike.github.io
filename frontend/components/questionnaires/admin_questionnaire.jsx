import React from 'react';
import CompletedQuestionnaire from './completed_questionnaire.jsx';


class AdminQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedUserKey: null };
    this.buildUserSelectorOptions = this.buildUserSelectorOptions.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  buildUserSelectorOptions () {
    // Creating options displaying respondents' usernames, with each option's value being their id
    const { questionnaire: { questions }} = this.props;

    // I'm just grabbing the responses from one of the questions, we'll require every question
    // in a questionnaire to be answered so every question will have the same respondents
    let defaultOption;
    let users;
    const responses = questions[Object.keys(questions)[0]].responses;
    // If there are responses, build options for each user and set appropriate default option
    if (responses[0]) {
      users = responses.map((response, idx) => {
        const author = response.author_name;
        const key = idx;
        return <option key={ key } value={ key }>{ author }</option>;
      });
      defaultOption = <option disabled value="default">Select a respondent</option>;
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
    this.setState({ selectedUserKey: e.target.value });
  }

  render () {
    const { questionnaire } = this.props;
    const selectorOptions = this.buildUserSelectorOptions();
    return (
      <section>
        <h1>{ questionnaire.title }</h1>
        { selectorOptions }
        <CompletedQuestionnaire questionnaire={ this.props.questionnaire }
          userKey={ this.state.selectedUserKey } />
      </section>
    );
  }
}

export default AdminQuestionnaire;
