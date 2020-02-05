import React, { Component } from 'react';
import Product from './Product';
import ProductConsumer from "../ProductContext";

export default class Products extends Component {
  render() {
      
    return (
      <>
      <ProductConsumer>
        {
          data =>{ 
            const products = data.products;
            return(
              <div>
                <h1>Mehsullar</h1>
                <div className="row">
                {
                    products.map(product => {
                        return <Product key={product.id} {...product}/>
                    })
                }
                </div>
              </div>
            )
          }
        }
        </ProductConsumer>
      </>
    )
  }
}
