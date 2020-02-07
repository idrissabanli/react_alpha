import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import AddProduct from './forms/AddProduct';
import UpdateProduct from './forms/UpdateProduct';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        
        <Router>
          <Navbar first_name="Turqut" last_name="Kerimli"/>
        
          <Switch>
            <Route exact path= "/" component={Home}/>
            <Route exact path= "/products" component={Products}/>
            <Route exact path= "/product-detail/:id" component={ProductDetail}/>
            <Route exact path= "/product-update/:id" component={UpdateProduct}/>
            <Route exact path= "/products/add" component={AddProduct}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
