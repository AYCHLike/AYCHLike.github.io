import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from './session/session_form_container.js';
import QuestionnaireIndex from './questionnaires/questionnaire_index.jsx';

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
          <IndexRoute component={ QuestionnaireIndex } onEnter={ _redirectUnlessLoggedIn } />
          <Route path="login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
          <Route path="signup" component={ SessionFormContainer} onEnter={ _redirectIfLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
