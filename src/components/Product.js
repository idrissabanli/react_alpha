import React, { Component } from 'react';
import '../App.css';

class Product extends Component {
  render() {
      const {name, price} = this.props;
    return (
        <div className="col-md-4">
            <div className="card" >
                <img  src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11-Pro/Midnight-Green/Apple-iPhone-11-Pro-Midnight-Green-frontimage.jpg" className="card-img-top product_image" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><b>Price:{price}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
  }
}
export default Product;