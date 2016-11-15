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
    this.props.requestAllQuestionnaires();
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
    let header;
    let formButton;
    if (this.props.admin) {
      formButton = <button className="form-toggle" onClick={ this.toggleForm }>Show/Hide Form</button>;
    }
    if (this.state.showForm) {
      body = <AdminQuestionnaireFormContainer toggleForm={ this.toggleForm }/>;
      header = <h1>New Questionnaire</h1>;
    } else {
      body = <ul>{ questionnaireLinks }</ul>;
      header = <h1>Your Questionnaires:</h1>;
    }
    if (!this.props.questionnaires[0]) {
      return <p>Loading...</p>;
    } else {
      return (
        <article className="index">
          { formButton }
          { header }
          { body }
        </article>
      );
    }
  }
}

export default QuestionnaireIndex;
