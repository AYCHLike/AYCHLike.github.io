import React from 'react';
import merge from 'lodash/merge';
import ResponseField from './response_field.jsx';


class EndUserQuestionnaireForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.setInitialResponseState();
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.constructQuestionnaireItems = this.constructQuestionnaireItems.bind(this);
  }
  // The state is going to be set based on the questions in the questionnaire,
  // so this function will create a field in the state for each response,
  // organized by the question id
  setInitialResponseState () {
    let { questionnaire: { questions }} = this.props;
    const initialState = {};
    Object.keys(questions).forEach((id) => {
      initialState[id] = {
        body: ""
      };
    });
    return initialState;
  }

  handleFieldChange (questionKey, value) {
    const newState = merge({}, this.state);
    newState[questionKey].body = value;
    this.setState(newState);
  }

  handleSubmit (e) {
    e.preventDefault();
    const responses = Object.keys(this.state).map((id) => {
      return {
        body: this.state[id].body,
        question_id: id
      };
    });
    this.props.submitResponses(responses, this.props.questionnaire.id).then(()=> {
      this.props.clearErrors();
    });
  }

  constructQuestionnaireItems () {
    // For each question in the questionnaire, constructing a list item
    // with the question's info and a functional component to handle the response
    const { questionnaire: { questions }} = this.props;
    return Object.keys(questions).map((id) => {
      const question = questions[id];
      const props = {
        questionKey: id,
        onChange: this.handleFieldChange,
        value: this.state[id].body
      };
      return (
        <li key={ id }>
          <h3>{ question.name }</h3>
          <h6>{ question.label }</h6>
          <ResponseField {...props} key={ id }/>
        </li>
      );
    });
  }

  render () {
    const questionnaireItems = this.constructQuestionnaireItems();
    const allErrors = this.props.errors.map((error, idx) => {
      return <li className="form-error" key={ idx }>{ error }</li>;
    });
    return (
      <article>
        <h1>{ this.props.questionnaire.title }</h1>
        <ul>
          { allErrors }
        </ul>
        <form onSubmit={ this.handleSubmit }>
          <ul>
            { questionnaireItems }
          </ul>
          <button>Submit</button>
        </form>
      </article>
    );
  }
}

export default EndUserQuestionnaireForm;
