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
import ProductShowContainer from './product/product_show_container';
import ProductIndexContainer from './product/product_index_container';
import CartIndexContainer from './cart_item/cart_index_container';
import Category from './category/category'
import UpdateUserContainer from './user/update_user_container';
import UserShowContainer from './user/user_show_container';
import Footer from './footer/footer';
const App = () => (
    <div className ="app">
      <Modal />
      <header>
        <HeaderContainer />
        <Category />
      </header>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/products/new" component={CreateProductContainer} />
        <Route exact path="/products/:productId/edit" component={UpdateProductContainer} />
        <Route exact path="/products/:productId" component={ProductShowContainer} />
        <Route exact path="/products" component={ProductIndexContainer} />
        <Route exact path ="/cart" component={CartIndexContainer}/>
        <Route path ="/search" component={ProductIndexContainer}/>
        <Route path ="/category/:category" component={ProductIndexContainer}/>
        <Route path ='/users/edit' component={UpdateUserContainer}/>
        <Route path ='/users/:userId' component={UserShowContainer}/>
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
  
  export default App;