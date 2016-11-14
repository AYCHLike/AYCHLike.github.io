import React from 'react';
import { Link } from 'react-router';
import AdminQuestionnaireFormContainer from './admin_questionnaire_form_container.js';


class QuestionnaireIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
    this.constructLinks = this.constructLinks.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    // Fetching questionnaires from the database if there are none in the store.
    if (!this.props.questionnaires[0]) {
      this.props.requestAllQuestionnaires();
      this.constructLinks = this.constructLinks.bind(this);
      this.toggleForm = this.toggleForm.bind(this);
    }
  }

  constructLinks() {
    return this.props.questionnaires.map((questionnaire) => {
      const pathname = `/questionnaires/${questionnaire.id}`;
      return (
        <li key={ questionnaire.id }>
          <Link to={ pathname }>{ questionnaire.title }</Link>
        </li>
      );
    });
  }

  toggleForm () {
    this.props.clearErrors();
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    const questionnaireLinks = this.constructLinks();
    // Pressing the button will toggle between showing links to existing questionnaires
    // and showing the form to add a new questionnaire. Upon successful creation, the form
    // component will call the toggleForm method to show the links index again.
    // Obviously we don't want the button to exist unless current user is an admin
    let body;
    let formButton;
    if (this.props.admin) {
      formButton = <button onClick={ this.toggleForm }>Show/Hide Form</button>
    }
    if (this.state.showForm) {
      body = <AdminQuestionnaireFormContainer toggleForm={ this.toggleForm }/>;
    } else {
      body = <ul>{ questionnaireLinks }</ul>;
    }
    if (!this.props.questionnaires[0]) {
      return <h1>Testing</h1>;
    } else {
      return (
        <article>
          { formButton }
          { body }
        </article>
      );
    }
  }
}

export default QuestionnaireIndex;
