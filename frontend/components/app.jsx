import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1>Earthy</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/login" component={LoginFormContainer} />
      </Switch>
    </div>
  );
  
  export default App;