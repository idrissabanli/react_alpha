import React, { Component } from 'react'
import Product from './Product'

export default class Products extends Component {
  render() {
      const products = this.props.products_data;
    return (
      <>
        <h1>Mehsullar</h1>
        <div className="row">
        {
            products.map(product => {
                return <Product {...product}/>
            })
        }
        </div>
      </>
    )
  }
}
