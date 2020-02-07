import React, { Component } from 'react';
import Product from './Product';
import ProductConsumer from "../ProductContext";

export default class Products extends Component {

  constructor(props){
    super(props);
    // console.log('Constructor')
  }
  // componentDidMount() {
  //   console.log('CDM');
  //   this.setState({});
  // }

  // componentDidUpdate() {
  //   console.log('CDU');
  // }
  

  render() {
      
    return (
      <>
      <ProductConsumer>
        {
          data =>{ 
            const products = data.products;
            return(
              <div className="container">

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
