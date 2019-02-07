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
import CategoryContainer from './category/category_container';
import UpdateUserContainer from './user/update_user_container';
const App = () => (
    <div className ="app">
      <Modal />
      <header>
        <HeaderContainer />
        <CategoryContainer />
      </header>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/products/new" component={CreateProductContainer} />
        <Route exact path="/products/:productId/edit" component={UpdateProductContainer} />
        <Route exact path="/products/:productId" component={ProductShowContainer} />
        <Route exact path="/products" component={ProductIndexContainer} />
        <Route exact path ="/cart" component={CartIndexContainer}/>
        <Route path ="/search" component={ProductIndexContainer}/>
        <Route path ="/category" component={ProductIndexContainer}/>
        <Route path ='/user/edit' component={UpdateUserContainer}/>
      </Switch>
    </div>
  );
  
  export default App;