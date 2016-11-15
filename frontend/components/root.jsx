import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from './session/session_form_container.js';
import QuestionnaireIndexContainer from './questionnaires/questionnaire_index_container.js';
import QuestionnaireShowContainer from './questionnaires/questionnaire_show_container.js';

const Root = ({ store }) => {
  const _redirectUnlessLoggedIn = (nextState, replace) => {
    if (!store.getState().currentUser) {
      replace("/login");
    }
  };
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().currentUser) {
      replace("/");
    }
  };
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRedirect to="/questionnaires"/>
          <Route path="questionnaires" component={ QuestionnaireIndexContainer } onEnter={ _redirectUnlessLoggedIn } />
          <Route path="questionnaires/:id" component={ QuestionnaireShowContainer } />
          <Route path="login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
          <Route path="signup" component={ SessionFormContainer} onEnter={ _redirectIfLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
