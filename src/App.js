import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import AddProduct from './forms/AddProduct';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        
        <Navbar first_name="Turqut" last_name="Kerimli"/>

        <div className="container">
          <h1>{"salam dunya".toUpperCase()}</h1>
          <div className="row"> 
              <Products/>
          </div>
          <AddProduct/>
        </div>
      </div>
    );
  }
}
export default App;
