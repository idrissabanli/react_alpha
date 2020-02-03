import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Product from './components/Product'

function App() {
  
  return (
    <div className="App">
      
      <Navbar first_name="Turqut" last_name="Kerimli"/>
      <div className="container">
        <h1>{"salam dunya".toUpperCase()}</h1>
        <div className="row">
            <Product name="IPhone 11" price="1250$"/>
        </div>
      </div>
    </div>
  );
}

export default App;
