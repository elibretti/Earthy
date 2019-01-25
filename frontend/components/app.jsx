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
import CreateProductContainer from './product/create_product_container';
import UpdateProductContainer  from './product/update_product_container';
const App = () => (
    <div>
      <Modal />
      <header>
        <HeaderContainer />
      </header>
      <div className="categories"> </div> 
      <Route exact path="/" component={Splash} />
      <Route exact path="/product/new" component={CreateProductContainer} />
      <Route exact path="/product/:productId/edit" component={UpdateProductContainer} />
    </div>
  );
  
  export default App;