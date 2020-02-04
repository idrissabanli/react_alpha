import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import AddProduct from './forms/AddProduct';
import { stat } from 'fs';

function App() {
  
  var state = { 'products' : [
    {
      'id': 1,
      'name': 'IPhone 10',
      'price': 1250,
      'image': 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11/Black/Apple-iPhone-11-Black-frontimage.jpg'
    }, 
    {
      'id': 2,
      'name': 'IPhone 8',
      'price': 1250,
      'image': 'https://mimelon.com/uploads/catalog/Product//iphone-xr-red-select-201809.png',
    },
    {
      'id': 3,
      'name': 'IPhone 7',
      'price': 1250,
      'image': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-black-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038992'
    },
    {
      'id': 4,
      'name': 'IPhone 6',
      'price': 1250,
      'image': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-black-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038992'
    },
  ]}
  var addProduct = (data) =>{
    const {name, price} = data;
    state.products.push({
      'id': '5',
      'name': name,
      'price': price,
      'image': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-black-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038992',
    })
    console.log(state)
  }

  return (
    <div className="App">
      
      <Navbar first_name="Turqut" last_name="Kerimli"/>

      <div className="container">
        <h1>{"salam dunya".toUpperCase()}</h1>
        <div className="row"> 
            <Products products_data={state.products} />
        </div>
        <AddProduct addProduct = {addProduct}/>
      </div>
    </div>
  );
}

export default App;
