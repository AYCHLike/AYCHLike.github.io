import React from 'react';
import merge from 'lodash/merge';
import QuestionField from './question_field.jsx';


class AdminQuestionnaireForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" , questions: {} };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleTitleFieldChange = this.handleTitleFieldChange.bind(this);
    this.addQuestionForm = this.addQuestionForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChange (fieldKey, field, value) {
    const newState = merge({}, this.state);
    newState.questions[fieldKey][field] = value;
    this.setState(newState);
  }

  handleTitleFieldChange (e) {
    const newState = merge({}, this.state);
    newState["title"] = e.target.value;
    this.setState(newState);
  }

  addQuestionForm () {
    const key = Object.keys(this.state.questions).length + 1;
    const newState = merge({}, this.state);
    newState.questions[key] = { name: "", label: "" };
    this.setState(newState);
  }

  handleSubmit () {
    // Add error to store and abort the submit if there's no title
    if (this.state.title === "") {
      this.props.receiveErrors(["Please enter a title"]);
      return;
    }
    // If there is a title, clear any previous errors
    this.props.clearErrors();
    // Same deal for each of the questions
    const questions = Object.keys(this.state.questions).map((key) => {
      const question = this.state.questions[key];
      if (question.name === "") {
        this.props.receiveErrors(["Please enter names for all questions"]);
      }
      if (question.label === "") {
        this.props.receiveErrors(["Please enter labels for all questions"]);
      }
      return question;
    });
    if (this.props.errors[0]) {
      return;
    } else {
      this.props.submitQuestionnaire(this.state.title, questions).then(() => {
        // Upon a successful submission, clear the errors and hide the form
        this.props.clearErrors();
        this.props.toggleForm();
      });
    }
  }

  render () {
    const questionForms = Object.keys(this.state.questions).map((key) => {
      const props = {
        fieldKey: key,
        onChange: this.handleFieldChange,
        value: this.state.questions[key]
      };
      return <QuestionField {...props} key={ key } />;
    });
    const allErrors = this.props.errors.map((error, idx) => {
      return <li className="form-error" key={ idx }>{ error }</li>;
    });
    return (
      <article>
        <ul>
          { allErrors }
        </ul>
        <label>Title:
          <input onChange={ this.handleTitleFieldChange } value={ this.state.title } />
        </label>
        <button onClick={ this.addQuestionForm }>Add Question</button>
        <ul>
          { questionForms }
        </ul>
        <button onClick={ this.handleSubmit }>Submit</button>
      </article>
    );
  }
}

export default AdminQuestionnaireForm;
