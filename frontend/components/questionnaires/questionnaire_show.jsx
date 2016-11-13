import React from 'react';
import AdminQuestionnaire from './admin_questionnaire.jsx';
import { Link } from 'react-router';

class QuestionnaireShow extends React.Component {
  componentDidMount () {
    if (!this.props.questionnaire) {
      this.props.requestSingleQuestionnaire(this.props.params.id);
    }
  }

  render () {
    if (!this.props.questionnaire) {
      return <h1>Loading...</h1>;
    } else {
      if (this.props.admin) {
      return (
        <article>
          <Link to="/questionnaires">Back</Link>
          <AdminQuestionnaire questionnaire={ this.props.questionnaire }/>
        </article>
        );
      } else {
      return (
        <article>
          <Link to="/questionnaires">Back</Link>
          <EndUserQuestionnaire questionnaire={ this.props.questionnaire }
            currentUser= { this.props.currentUser }/>
        </article>
        );
      }
    }
  }
}

export default QuestionnaireShow;
