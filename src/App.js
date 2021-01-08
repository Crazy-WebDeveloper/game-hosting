import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense } from "react";

import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from "react-router-dom";
const LoginComponent = withRouter(lazy(() => import('./user/Login')));
const SignUpComponent = withRouter(lazy(() => import('./host/HostLogin')));
const CreateCodeComponent = withRouter(lazy(() => import('./user/CreateCode')));
const HostComponent = withRouter(lazy(() => import('./host/Host')));
const ViewComponent = withRouter(lazy(() => import('./host/View')));
const CreateComponent = withRouter(lazy(() => import('./host/Create')));
const QuestionAdd = withRouter(lazy(() => import('./host/QuestionAdd')));
const MainComponent = withRouter(lazy(() => import('./user/Main')));
const QuestionComponent = withRouter(lazy(() => import('./user/Question')));
const SelectComponent = withRouter(lazy(() => import('./host/Select')));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div></div>}>  
        <Router>
          <Switch>
            <Route path="/login" render={props => <LoginComponent {...props} />} />
            <Route path="/signup" render={props => <SignUpComponent {...props} />} />
            <Route path="/create" render={props => <CreateCodeComponent {...props} />} />
            <Route path="/host" render={props => <HostComponent {...props} />} />
            <Route path="/view" render={props => <ViewComponent {...props} />} />
            <Route path="/creategame" render={props => <CreateComponent {...props} />} />
            <Route path="/questionadd" render={props => <QuestionAdd {...props} />} />
            <Route path="/main" render={props => <MainComponent {...props} />} />
            <Route path="/question" render={props => <QuestionComponent {...props} />} />
            <Route path="/select" render={props => <SelectComponent {...props} />} />
            <Route path="/" render={props => <Redirect to="/main" />} />
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
