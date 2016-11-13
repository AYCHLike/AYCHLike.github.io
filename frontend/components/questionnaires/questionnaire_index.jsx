import React from 'react';
import { Link } from 'react-router';


class QuestionnaireIndex extends React.Component {
  constructor(props) {
    super(props);
    this.constructLinks = this.constructLinks.bind(this);
  }

  componentDidMount() {
    // Fetching questionnaires from the database if there are none in the store.
    if (!this.props.questionnaires[0]) {
      this.props.requestAllQuestionnaires();
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

  render() {
    if (!this.props.questionnaires[0]) {
      return <h1>Testing</h1>;
    } else {
      return (
        <ul>
          { this.constructLinks() }
        </ul>
      );
    }
  }
}

export default QuestionnaireIndex;
