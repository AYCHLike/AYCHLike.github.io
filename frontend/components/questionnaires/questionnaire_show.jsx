import React from 'react';
import AdminQuestionnaire from './admin_questionnaire.jsx';

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
        return <AdminQuestionnaire questionnaire={ this.props.questionnaire }/>;
      } else {
        return <EndUserQuestionnaire questionnaire={ this.props.questionnaire } />;
      }
    }
  }
}

export default QuestionnaireShow;
