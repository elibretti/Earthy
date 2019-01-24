import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Modal from './modal/modal_container'
import HeaderContainer from './header/header_container';
import Splash from './splash/splash';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
const App = () => (
    <div>
      <Modal />
      <header>
        <HeaderContainer />
      </header>
      <div className="categories"> </div> 
      <Route exact path="/" component={Splash} />
    </div>
  );
  
  export default App;