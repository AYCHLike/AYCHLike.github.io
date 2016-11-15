import React from 'react';
import merge from 'lodash/merge';
import QuestionField from './question_field.jsx';

// So I thought for a long time about how to best implement this,
// as we need one form for creating both the questionnaire and its questions.
// I decided the best way to go about it is to make the form one controlled component,
// keeping track of the field for the questionnaire title and each of the fields for
// the questions, each of which gets one functional component with a handler passed down
// in the props. Each time we add another question to the form, we add a field to the state,
// where the questions are structured as a question key pointing to its required fields.
// Once we're ready to submit, both the questionnaire data and the data for all of the questions
// are sent to the questionnaire controller, where they're handled with a factory method that
// builds one ActiveRecord transaction for everything, and will catch any exception thrown and
// render it so that we get feedback on the form
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
    // Dynamically adding questions to the form, and updating the state
    // to reflect that
    const key = Object.keys(this.state.questions).length + 1;
    const newState = merge({}, this.state);
    newState.questions[key] = { name: "", label: "" };
    this.setState(newState);
  }

  handleSubmit (e) {
    e.preventDefault();
    const questions = Object.keys(this.state.questions).map((key) => {
      return this.state.questions[key];
    });
    this.props.submitQuestionnaire(this.state.title, questions).then(() => {
      // Upon a successful submission, clear the errors and hide the form
      this.props.clearErrors();
      this.props.toggleForm();
    });
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
        <form onSubmit={ this.handleSubmit }>
          <ul>
            { questionForms }
          </ul>
          <button>Submit</button>
        </form>
      </article>
    );
  }
}

export default AdminQuestionnaireForm;
